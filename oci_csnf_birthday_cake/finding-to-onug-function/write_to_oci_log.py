import oci
import json
import logging
from datetime import datetime


def write_onug_to_log(signer, config, onug, log_ocid):
    try:
        # Create Log Client from Signer
        log_client = oci.loggingingestion.LoggingClient(config=config, signer=signer)
        # Matching onug time precision to match log time precision
        raw_time = onug['event']['startTime']
        logging.debug("write_onug_to_log: raw_time is: " + str(raw_time))
        updated_time = raw_time.replace('Z','.000Z')
        logging.debug("write_onug_to_log: updated_time is: " + str(updated_time))

        # Creating Log Entry
        log_entry = oci.loggingingestion.models.LogEntry()
        log_entry.data = json.dumps(onug)
        log_entry.id = onug['event']['guid']
        logging.debug("write_onug_to_log: log_entry.id is: " + str(onug['event']['guid']))
        log_entry.time = onug['event']['startTime']
        # Creating Batch entry
        log_batch = oci.loggingingestion.models.LogEntryBatch()
        log_batch.defaultlogentrytime = onug['event']['startTime']
        log_batch.entries = [log_entry]
        logging.debug("write_onug_to_log: log_batch.source is: " + str(onug['source']['sourceName']))
        log_batch.source = onug['source']['sourceName']
        logging.debug("write_onug_to_log: log_batch.subject is: " + str(onug['resource']['identifier']))
        log_batch.subject = str(onug['resource']['identifier'])
        logging.debug("write_onug_to_log: log_batch.type is: " + str(onug['event']['name']))
        log_batch.type = onug['event']['name']
        log_details = oci.loggingingestion.models.PutLogsDetails()
        log_details.log_entry_batches = [log_batch]
        log_details.specversion="1.0"
        try: 
            logging.debug("write_onug_to_log: Log details to write: " + str(log_details))
            log_client.put_logs(log_ocid, log_details)
            return
        except (Exception) as ex:
            raise Exception('ERROR: Failed to write event to Log: ', ex, flush=True)
    except (Exception) as ex:
        raise Exception ('ERROR: Event format is not correct: ', ex, flush=True)

def write_event_to_log(signer,config, event,log_ocid):
    try:
        # Create Log Client from Signer
        log_client = oci.loggingingestion.LoggingClient(config=config, signer=signer)
        #log_client = oci.loggingingestion.LoggingClient(config={}, signer=signer)
        # Matching event time precision to match log time precision
        raw_time = event['eventTime']
        updated_time = raw_time.replace('Z','.000Z')
        # Creating Log Entry
        log_entry = oci.loggingingestion.models.LogEntry()
        log_entry.data = json.dumps(event['data'])
        log_entry.id = event['data']['resourceId']
        log_entry.time = updated_time
        # Creating Batch entry
        log_batch = oci.loggingingestion.models.LogEntryBatch()
        log_batch.defaultlogentrytime = updated_time
        log_batch.entries = [log_entry]
        log_batch.source = event['source']
        log_batch.subject = event['data']['resourceName']
        log_batch.type = event['eventType']
        log_details = oci.loggingingestion.models.PutLogsDetails()
        log_details.log_entry_batches = [log_batch]
        log_details.specversion="1.0"
        try: 
            logging.debug("write_event_to_log: Log details to write: " + str(log_details))
            log_client.put_logs(log_ocid, log_details)
            return
        except (Exception) as ex:
            raise Exception('ERROR: Failed to write event to Log: ', ex, flush=True)
    except (Exception) as ex:
        raise Exception ('ERROR: Event format is not correct: ', ex, flush=True)

