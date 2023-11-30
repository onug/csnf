""" CLI script to convert the ONUG provider CSV to JSON """
# Copyright (c) 2021 Oracle and/or its affiliates.
# Licensed under the Universal Permissive License v 1.0
# as shown at https://oss.oracle.com/licenses/upl.

import sys
import argparse
import csv
import json


def validate_csv_data(
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
    has_header = True
    with open(input_file) as csv_file:
        csvreader = csv.reader(csv_file)
        if has_header:
            next(csvreader)

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

    return all_providers


def write_json_output(all_providers, output_file):
    """Output file with a json dump"""
    with open(output_file, "w") as outfile:
        json.dump(all_providers, outfile)


def dict_to_splunk_conf(all_providers):
    with open("./props.conf", "w") as outfile:
        for provider, provider_values in all_providers.items():
            for source, source_values in provider_values["source"].items():
                # print(source + " : " + str(source_values))
                print(f"[{provider}:{source_values['sourceName']}]")
                outfile.write(f"[{provider}:{source_values['sourceName']}]\n")
                for alert_mapping, alert_mapping_values in source_values["alerts"][
                    "__default__"
                ]["alertMapping"].items():
                    alias_prefix = "FIELDALIAS-csnf-"
                    prefix = alias_prefix + alert_mapping.replace(".", "-")
                    print(
                        prefix
                        + " = "
                        + '"'
                        + alert_mapping_values["path"]
                        + '"'
                        + " ASNEW "
                        + '"csnf.'
                        + alert_mapping
                        + '"'
                    )
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
                    # outfile.write(prefix + " = " + alertMapping_values['path'] + " ASNEW " + '"' + alertMapping + '"\n')
                    # print(prefix + alertMapping + " : " + str(alertMapping_values['path']))

                # for alertMapping, alertMapping_values in source_values['alertMapping'].items():
                # 	print(alertMapping_values)


# def convert_onug_csv_to_trigger(input_file, output_file):
# 	all_providers = {}
# 	has_header = True
# 	try:
# 		with open(input_file) as f:
# 			csvreader = csv.reader(f)
# 			if has_header: next(csvreader) # Consume one line if a header exists

# 			# Iterate over the rows, and unpack each row into the variables
# 			for provider_name, provider_type, provider_id, source_name, alert_id_name, csnf_path, provider_path, static_value, entity_type in csvreader:
# 				# If the provider hasn't been processed yet, create a new dict for it
# 				if provider_name not in all_providers:
# 					all_providers[provider_name] = {
# 						"provider" : provider_name,
# 						"providerType" : provider_type,
# 						"providerId" : provider_id,
# 						"source" : {}}

# 				# Get the dict object that holds this provider's information
# 				provider = all_providers[provider_name]
# 				# If the tournament hasn't been processed already for this team, create a new dict for it in the team's dict
# 				if source_name not in provider["source"]:
# 					provider["source"][source_name] = { "sourceName" : source_name, "sourceId" : "None", "alerts": {}}

# 				if alert_id_name not in provider["source"][source_name]["alerts"]:
# 					provider["source"][source_name]["alerts"][alert_id_name] = {"alertMapping" : {}}

# 				alert_mapping = provider["source"][source_name]["alerts"][alert_id_name]["alertMapping"]
# 				alert_mapping[csnf_path] = {
# 					"path" : provider_path,
# 					"entityType" : entity_type,
# 					"mappedValue" : True if static_value else False,
# 					"value" : static_value
# 				}
# 	except Exception as e:
# 		raise("Failed to convert ONUG parse CSV file \n " + str(e))

# 	try:
# 		with open(output_file, "w") as outfile:
# 			json.dump(all_providers, outfile)
# 	except Exception as e:
# 		raise("Failed to write JSON to file \n" + str(e))

# 	return all_providers


def execute_conversion():
    """Orchestrates conversion logic"""
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "-i", type=argparse.FileType("r"), dest="input_csv", help="Input CSV File"
    )
    parser.add_argument(
        "-o", type=argparse.FileType("w"), dest="output_json", help="JSON Output prefix"
    )
    result = parser.parse_args()

    if len(sys.argv) != 5:
        parser.print_help()
    else: 
        print(f"Input file is: {result.input_csv.name}")
        print(f"Output file is: {result.output_json.name}")
        all_providers_dict = convert_onug_csv_to_dictionary(result.input_csv.name)
        write_json_output(all_providers_dict, result.output_json.name)
        dict_to_splunk_conf(all_providers_dict)


execute_conversion()
