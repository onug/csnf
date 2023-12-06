"""Opens CSV for provider and tests that it's valid. """

import csv

PROVIDER_CSV = "../provider.csv"


def test_csv_opens():
    """Opens CSV and rights out file"""
    with open(PROVIDER_CSV, encoding="utf-8") as csv_file:
        csvreader = csv.reader(csv_file)
        for row in csvreader:
            print(row)


test_csv_opens()
