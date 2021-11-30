# Setting up Splunk Http Event Collector (HEC)

Create a new http event collector, name the source and disable ssl for testing. Save the token that was generated

# Testing the Splunk HEC with a sample event

Use curl to test the new event collector configured in the prior step. The authorization header must specify Splunk authorization followed by the token. The payload must be JSON

curl http://splunk:8088/services/collector/event -H "Authorization: Splunk fac44edf-79a4-409b-938d-1982259bf523" -d '{"event": "Hello, world"}'

# Search the Splunk index for the event

Search > New Search
source="CSNF_DECORATOR"

# Testing with the Cribl Splunk HEC Collector
34546337-6f6b-3559-5673-6959724c6962

curl http://cribl:8088/services/collector/event -H "Authorization: Splunk 34546337-6f6b-3559-5673-6959724c6962" -d '{"event": "Hello, world"}'