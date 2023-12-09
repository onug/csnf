"""Opens CSV for provider and tests that it's valid. """

import csv
import os
import yaml

PROVIDER_CSV = os.path.join(os.path.dirname(__file__), "../provider.csv")
SCHEMA_YAML = os.path.join(os.path.dirname(__file__), "../schema.yml")


def parse_schema_yml():
    """Opens specified yaml file and parses"""
    with open(SCHEMA_YAML, "r", encoding="utf-8") as yml_file:
        schemas = yaml.safe_load(yml_file)

    return schemas


def test_csv_opens():
    """Opens CSV and rights out file"""
    csv_data = []
    with open(PROVIDER_CSV, encoding="utf-8") as csv_file:
        csvreader = csv.reader(csv_file)
        for row in csvreader:
            print(row)
            csv_data.append(row)

    return csv_data


def validate_csnf_fields(csv_data):
    """Iterates over CSV and checks that each field is valid"""
    schemas = parse_schema_yml()
    print("--------------")
    for row in csv_data[1:]:
        csnf_dictionary = row[5].split(".")
        print(csnf_dictionary)
        if len(csnf_dictionary) > 3:
            raise ValueError("Too many elements in field")
        if len(csnf_dictionary) == 3:
            assert (
                csnf_dictionary[2]
                in schemas[csnf_dictionary[0]][csnf_dictionary[1]].keys()
            )
        if len(csnf_dictionary) == 2:
            assert csnf_dictionary[1] in schemas[csnf_dictionary[0]]


csv_iterable = test_csv_opens()
validate_csnf_fields(csv_iterable)
