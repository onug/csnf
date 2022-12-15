import logging
import requests
import re
import json

class Onug: 

    __source_to_provider_mapping = {}

    __finding = {}
    __finding["provider"] = {}
    __finding["source"] = {}
    __finding["event"] = {}
    __finding["resource"] = {}

    def __init__(self,url,raw_finding, provider=None, source=None):
        self.__raw_finding = raw_finding
        self.__url = url

        # Getting the ONUG mapping
        self.__set_onug_provider_mapping()
        
        # Build Source to provider mapping 
        self.__set_source_regex_provider_mapping()

        # Storing raw_finding
        self.__raw_finding = raw_finding

        if provider and source:
            self.__provider = provider
            self.__source = source
        else:
            self.__provider, self.__source = self.__set_provider_source_raw_finding()

        logging.debug("__init___: provider is set to: " +  str(self.__provider))
        self.__set_provider_source_raw_finding()
        self.__set_finding_provider_data()
        self.__set_onug_mapping_for_source()
        self.__map_raw_finding_to_onug()
        return

    def __set_source_regex_provider_mapping(self):
        for provider_key, provider_value in self.__onug_mapping.items():
            for source_key, source_value in provider_value['source'].items():
                self.__source_to_provider_mapping[source_value['sourceIdentifierRegex']] = {"provider" : provider_key, "source" : source_key}
                logging.debug("__set_source_regex_provider_mapping: Added this to mapping" + str(self.__source_to_provider_mapping[source_value['sourceIdentifierRegex']]))

    def __set_provider_source_raw_finding(self):
        for source_key, source_value in self.__source_to_provider_mapping.items():
            if re.search(source_key, str(self.__raw_finding)):
                return source_value['provider'], source_value['source']
        
        logging.error("__set_provider_source_raw_finding: FAILED TO GET SOURCE AND PROVIDER")
        raise SystemExit("__set_provider_source_raw_finding: FAILED TO GET SOURCE AND PROVIDER")

    def __set_finding_provider_data(self):
        logging.debug("__set_provider_from_finding: Starting")
        self.__finding["provider"]["providerId"] = self.__onug_mapping[self.__provider]["providerId"]
        logging.debug("__set_provider_from_finding: ProviderId is set to: " + self.__finding["provider"]["providerId"]) 
        self.__finding["provider"]["providerType"] = self.__onug_mapping[self.__provider]["providerType"]
        logging.debug("__set_provider_from_finding: ProviderId is set to: " + self.__finding["provider"]["providerType"])
        self.__finding["provider"]["name"] = self.__onug_mapping[self.__provider]['provider']
        logging.debug("__set_provider_from_finding: Provider is set to: " + self.__finding["provider"]["name"])
        return


    def __set_onug_provider_mapping(self):
        logging.debug("__set_onug_provider_mapping: getting onug mapping.")
        try:
            self.__onug_mapping = requests.get(self.__url).json()
        except requests.exceptions.HTTPError as err:
            logging.error("__set_onug_provider_mapping: FAILED TO GET REQUEST" + str(err))
            raise SystemExit(err)

    # def __set_finding_source_data(self):
    #     for item_to_map in self.__onug_mapping[self.__provider]['source'][self.__source]['alerts']['default']:


    def __set_onug_mapping_for_source(self):
        logging.debug("__set_onug_mapping_for_source: getting provider mapping.")
        try:
             self.__source_mapping = self.__onug_mapping[self.__provider]['source'][self.__source]
        except Exception as err:
            logging.error("__set_onug_mapping_for_source: FAILED Provider from Provider JSON" + str(err))
            raise SystemExit(err)


    def __mapped_item_from_path(self, path, finding):
            logging.debug("get_mapped_item_from_path: path is: " + str(path))
            try:
                tuple_path = tuple(path.split("."))
                for key in tuple_path:
                    finding = finding[key]
                logging.debug("get_mapped_item_from_path: mapped_item is: " + str(finding))
                return finding
            except:
                return False

    def __set_item_from_path(self, path, item):
        # Cheating
        logging.debug("__set_item_from_path: path is: " + str(path) + " Item is: " + str(item) )
        keys = path.split(".")
        self.__finding[keys[0]][keys[1]] = item

        

    def __map_raw_finding_to_onug(self):
        logging.debug("__map_raw_finding_to_onug: source mapping is: " )
        for alert_key, alert_value in self.__source_mapping['alerts'].items():
            for map_key, map_value in alert_value['alertMapping'].items():
                for key, value in map_value.items():
                    logging.debug("__map_raw_finding_to_onug: Mapped Value: " + str(map_key))
                    if not(map_value['mappedValue']):
                        path = map_value['path']
                        mapped_item = self.__mapped_item_from_path(path, self.__raw_finding)
                        # logging.debug(f'map_to_onug: {element} is mapped to {mapped_item} via path: {self.__source_mapping[element]["path"]}')
                        self.__set_item_from_path(map_key, mapped_item)                

    def get_provider_data(self):
        return self.__finding["provider"]
    
    def get_finding(self):
        return self.__finding