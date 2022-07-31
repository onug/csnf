# Copyright (c) 2021 Oracle and/or its affiliates.
# Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.

import sys
import argparse
import csv
import json

def convert_onug_csv_to_json(input_file, output_file):
	all_providers = {}
	hasHeader = True
	try:
		with open(input_file) as f:
			csvreader = csv.reader(f)
			if hasHeader: next(csvreader) # Consume one line if a header exists
			
			# Iterate over the rows, and unpack each row into the variables
			for provider_name, provider_type, provider_id, source_name, alert_id_name, csnf_path, provider_path, static_value, entity_type in csvreader:
				# If the provider hasn't been processed yet, create a new dict for it
				if provider_name not in all_providers:
					all_providers[provider_name] = {
						"provider" : provider_name,
						"providerType" : provider_type,
						"providerId" : provider_id,
						"source" : {}}
				
				# Get the dict object that holds this provider's information
				provider = all_providers[provider_name]
				# If the tournament hasn't been processed already for this team, create a new dict for it in the team's dict
				if source_name not in provider["source"]:
					provider["source"][source_name] = { "sourceName" : source_name, "sourceId" : "None", "alerts": {}}

				if alert_id_name not in provider["source"][source_name]["alerts"]:
					provider["source"][source_name]["alerts"][alert_id_name] = {"alertMapping" : {}}

				alert_mapping = provider["source"][source_name]["alerts"][alert_id_name]["alertMapping"]
				alert_mapping[csnf_path] = {
					"path" : provider_path,
					"entityType" : entity_type,
					"mappedValue" : True if static_value else False,
					"value" : static_value
				}
	except Exception as e:
		raise("Failed to convert ONUG parse CSV file \n " + str(e))

	try:
		with open(output_file, "w") as outfile:
			json.dump(all_providers, outfile)
	except Exception as e:
		raise("Failed to write JSON to file \n" + str(e))
	
	return all_providers


def convert_onug_csv_to_trigger(input_file, output_file):
	all_providers = {}
	hasHeader = True
	try:
		with open(input_file) as f:
			csvreader = csv.reader(f)
			if hasHeader: next(csvreader) # Consume one line if a header exists
			
			# Iterate over the rows, and unpack each row into the variables
			for provider_name, provider_type, provider_id, source_name, alert_id_name, csnf_path, provider_path, static_value, entity_type in csvreader:
				# If the provider hasn't been processed yet, create a new dict for it
				if provider_name not in all_providers:
					all_providers[provider_name] = {
						"provider" : provider_name,
						"providerType" : provider_type,
						"providerId" : provider_id,
						"source" : {}}
				
				# Get the dict object that holds this provider's information
				provider = all_providers[provider_name]
				# If the tournament hasn't been processed already for this team, create a new dict for it in the team's dict
				if source_name not in provider["source"]:
					provider["source"][source_name] = { "sourceName" : source_name, "sourceId" : "None", "alerts": {}}

				if alert_id_name not in provider["source"][source_name]["alerts"]:
					provider["source"][source_name]["alerts"][alert_id_name] = {"alertMapping" : {}}

				alert_mapping = provider["source"][source_name]["alerts"][alert_id_name]["alertMapping"]
				alert_mapping[csnf_path] = {
					"path" : provider_path,
					"entityType" : entity_type,
					"mappedValue" : True if static_value else False,
					"value" : static_value
				}
	except Exception as e:
		raise("Failed to convert ONUG parse CSV file \n " + str(e))

	try:
		with open(output_file, "w") as outfile:
			json.dump(all_providers, outfile)
	except Exception as e:
		raise("Failed to write JSON to file \n" + str(e))
	
	return all_providers
##########################################################################
# Arg Parsing function to be updated
##########################################################################
def set_parser_arguments():
	parser = argparse.ArgumentParser()
	parser.add_argument(
        '-o',
        type=argparse.FileType('r'),
        dest='input.csv',
        help="Input CSV File"
    )
	parser.add_argument(
        '-i',
        type=argparse.FileType('w'),
        dest='output_json',
        help="JSON Output prefix")
	result = parser.parse_args()
	if len(sys.argv) < 3:
		parser.print_help()
		return None



##########################################################################
# execute_conversion
##########################################################################

def execute_conversion():
	parser = argparse.ArgumentParser()
	parser.add_argument(
        '-i',
        type=argparse.FileType('r'),
        dest='input_csv',
        help="Input CSV File"
    )
	parser.add_argument(
        '-o',
        type=argparse.FileType('w'),
        dest='output_json',
        help="JSON Output prefix")
	result = parser.parse_args()
	
	if len(sys.argv) != 5 :
		parser.print_help()
		return None

	print(f'Input file is: {result.input_csv.name}')
	print(f'Output file is: {result.output_json.name}')
	convert_onug_csv_to_json(result.input_csv.name, result.output_json.name)


##########################################################################
# Main
##########################################################################
execute_conversion()
