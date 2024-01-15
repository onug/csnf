""" CLI script to convert the ONUG provider CSV to JSON """
# Copyright (c) 2021 Oracle and/or its affiliates.
# Licensed under the Universal Permissive License v 1.0
# as shown at https://oss.oracle.com/licenses/upl.

import argparse
import csv
import json


def validate_csv_data(  # pylint: disable=too-many-arguments
    all_providers,
    provider_name,
    provider_type,
    provider_id,
    source_name,
    alert_id_name,
    csnf_path,
    provider_path,
    static_value,
    entity_type,
):
    """Guarantees that data from CSV is formatted correctly in dictionary."""
    if provider_name not in all_providers:
        all_providers[provider_name] = {
            "provider": provider_name,
            "providerType": provider_type,
            "providerId": provider_id,
            "source": {},
        }

    provider_source = all_providers[provider_name]["source"]

    if source_name not in provider_source:
        provider_source[source_name] = {
            "sourceName": source_name,
            "sourceId": "None",
            "alerts": {},
        }

    source_alerts = provider_source[source_name]["alerts"]
    if alert_id_name not in source_alerts:
        source_alerts[alert_id_name] = {"alertMapping": {}}

    source_alerts[alert_id_name]["alertMapping"][csnf_path] = {
        "path": provider_path,
        "entityType": entity_type,
        "mappedValue": (static_value != ""),
        "value": static_value,
    }

    return all_providers


def convert_onug_csv_to_dictionary(input_file):
    """Reads data from CSV and outputs it as a python dictionary"""
    all_providers = {}
    with open(input_file, encoding="utf-8") as csv_file:
        csvreader = csv.reader(csv_file)
        next(csvreader)

        try:
            for (
                provider_name,
                provider_type,
                provider_id,
                source_name,
                alert_id_name,
                csnf_path,
                provider_path,
                static_value,
                entity_type,
            ) in csvreader:
                all_providers = validate_csv_data(
                    all_providers,
                    provider_name,
                    provider_type,
                    provider_id,
                    source_name,
                    alert_id_name,
                    csnf_path,
                    provider_path,
                    static_value,
                    entity_type,
                )
        except ValueError as val_error:
            print("\n\nProper headers were not found in CSV.")
            print("Ensure CSV has proper CSNF headings.")
            raise SystemExit(val_error) from val_error

    return all_providers


def write_json_output(all_providers, output_file):
    """Output file with a json dump"""
    with open(f"./{output_file}.json", "w", encoding="utf-8") as outfile:
        json.dump(all_providers, outfile)


def dict_to_splunk_conf(all_providers, output_prefix):
    """Creates splunk configuration file and outputs file contents to screen."""
    with open(f"./{output_prefix}.conf", "w", encoding="utf-8") as outfile:
        for provider, provider_values in all_providers.items():
            for _, source_values in provider_values["source"].items():
                outfile.write(f"[{provider}:{source_values['sourceName']}]\n")
                for alert_mapping, alert_mapping_values in source_values["alerts"][
                    "__default__"
                ]["alertMapping"].items():
                    alias_prefix = "FIELDALIAS-csnf-"
                    prefix = alias_prefix + alert_mapping.replace(".", "-")
                    outfile.write(
                        prefix
                        + " = "
                        + '"'
                        + alert_mapping_values["path"]
                        + '"'
                        + " ASNEW "
                        + '"csnf.'
                        + alert_mapping
                        + '"\n'
                    )


def execute_conversion():
    """Orchestrates conversion logic"""
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "-i",
        "--input",
        type=argparse.FileType("r"),
        dest="input_csv",
        help="Input CSV File",
        required=True,
    )
    parser.add_argument(
        "-o",
        "--output",
        dest="output",
        help="Output prefix for both JSON and Splunk format.",
        required=True,
    )

    result = parser.parse_args()

    if result.output.endswith(".json") or result.output.endswith(".conf"):
        print(f"Stripping .json or .conf from output prefix: {result.output}\n")
        result.output = result.output[:-5]

    print(f"Input file is: {result.input_csv.name}")

    all_providers_dict = convert_onug_csv_to_dictionary(result.input_csv.name)
    write_json_output(all_providers_dict, result.output)
    print(f"JSON output file is: {result.output}.json")
    dict_to_splunk_conf(all_providers_dict, result.output)
    print(f"Splunk output file is: {result.output}.conf")


execute_conversion()
