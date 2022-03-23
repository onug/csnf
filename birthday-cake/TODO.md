## Todo's for Birthday cake

**A to B** 

**Cupcake to bday dictionary/standardization, Oracle works today + Microsoft (stretch goal) - Jeff/Josh**

- [ ] Consume JSON Oracle Anomalous User event from AWS or OCI Queue (Jeff/Josh)
- [ ] Consume JSON Azure Anomalous User event from Azure or OCI Queue (Jeff/Josh)
- [ ] Standardize Oracle event using birthday-cake > send to Sentinel (Jeff/Josh)
- [ ] Standardize Azure event using birthday-cake > send to Sentinel (Jeff/Josh)
- [ ] Determine Splunk HEC to use for the demo (Jeff/Peter)
- [ ] Send Raw Oracle event to Splunk - need a Splunk (do not decorate)(Jeff/Josh)
- [ ] Send Raw Azure event to Splunk (do not decorate)(Jeff/Josh)

**C to D** 

**External decorator sources for CSNF - based on Customer Risk API; Internal decorator sources for CSNF - Azure Threat Intelligence**

- [ ] Configure and test internal decorator source - using the Risk API and integrate to playbook (Peter)
- [ ] Determine external decorator source - do this in Sentnel using Azure Threat Intelligence? (Preeti)
- [ ] Update playbook > Jira > Slack integration as required for Azure and GCP events (Peter/Preeti)
- [ ] Update the Sentinel Playbook to send the Sentinel event to Gluware's HTTPS endpoint (Michael/Peter/Preeti)

**D to E**

**Gluware to publish custom API calls specific to CSNF events that would enable us to trigger a workflow vs specific actions like drift/audit/provision.(Michael)** 

- [ ] Configure a Glueware org and basic auth credentials to access the GluAPI from Sentinel (Michael)
- [ ] Consume the Sentinel event in Glueware and perform an audit action based on the CSNF decoration passed (Michael)

**E to F**

**Actions are remaining on Gluware team. If this is not complete to demo, we can include the available/expected actions in a slide**

- [ ] Deploy two API's for MITRE ATT&CK and Risk decorations. The API will respond to requests from the SOAR playbook to provide MITRE Technique and Risk Level for the Playbook decorator to consume.

**A through F** 

**End to end testing of CSNF birthday cake scenario**

- [ ] Create mock event containing all the required values that will trigger anticipated Sentinel Playbook workflows required to exercise all demo use cases
- [ ] Determine presentation flow and supporting graphics, visuals that can be used to emphazise CSNF talking points
- [ ] Updated info graphic based on 'The Image' for the demonstration 



## Birthday Cake Flow

![Birthday Cake Storyboard - March 8 update](img/csnf-storyboard-bday-cake.png)
