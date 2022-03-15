## Todo's for Birthday cake

**A.** Event sources will be AWS SQS, GCP Cloud Pub/Sub and Azure Queue Storage. AWS SQS is configured in Triggermesh as using the AWSSQSSource source and Sockeye is the sink (event display). 

- [ ] GCP and Azure need to be configured as in Triggermesh, this is done declaritively within a Kubernetes 

**B.** Event standardization in Knative with Triggermesh. The aquasec event from cupcake has been impleted as a Knative service. 

- [ ] Expand the canonical model beyond cupcake to add additional elements, which elements do we need to add?
- [ ] Triggermesh will be standardizing the Guardduty event using bumblebee transformation to apply the canonical model to the Guardduty json object. (this is using the model from cupcake today) 

**C.** `CSNF` standardized events are then ready to be consumed by SIEM platforms that ingest alert data, and SOAR platforms to trigger play books that minimize toil and human intervention by automated and orchestrating responsive workflow tasks. 

- [ ] Integrate the incoming HTTP event from Triggermesh to the Azure Data Collector API
- [ ] Use Miro to document the requirements for the Azure Logic App wflow to be implemented as a Playbook
- [ ] Send events into Azure from Triggermesh to test flows through the Azure Playbook

**D.** `CSNF` decoration allows teams to better comprehend and prioritize incident response actions through improved contextualization. The reality is that some applications represent more risk to the organization than others and that's where `CSNF` decoration comes in. 

- [ ] Deploy two API's for MITRE ATT&CK and Risk decorations. The API will respond to requests from the SOAR playbook to provide MITRE Technique and Risk Level for the Playbook decorator to consume.

**E.** Glueware Config Drift and Audit Application will receive a `CSNF` decorated payload from the SOAR and then audit the network configuration by analyzing any changes from the desired configuration state.

- [ ] Requested that Gluware verify that they can receive an incoming webhook event and perform an action based on the payload contained within that event. The action would be audit network configuration and identify unauthorized changes by the adversary.

**F.** Glueware will trigger a terraform plan and apply the plan based on the prior configuration state in order to restore the network configuration and contain the threat. 

- [ ] Validate with Gluware the cloud remediation scenario of using Terraform to apply a network reconfiguration and update the Slack channel to confirm that the threat has been contained or eradicated.
