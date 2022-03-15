## Cloud Security Notification Framework "Birthday Cake Edition"

CSNF is a newly-developed open standard designed to support the normalization and enrichment of security notifications across multiple cloud platforms, both public and private. It is an implementation-agnostic framework that provides choice for consumers when using CSNF in their security events pipeline. Further, CSNF’s “decorator” component provides event enrichment capabilities, thus allowing rapid event contextualization and limiting the need for human intervention. The result is that response to threats can be accelerated without having to increase the workload of already overtaxed security operations teams.

## Scenario Updates

1. The scenario has been updated to reflect the incident handling life cycle listed in NIST SP 800-61 Rev. 2 Computer Security Incident Handling Guide. 
2. Anomalous user activity alerts should be investigated for additional indicators of compromise(IOC). The scenario introduces additional MITRE ATT&CK techniques that are IOCs for detecting ransomware attacks.
3. Glueware's Config Drift and Audit application will be triggered by the SOAR playbook to perform containment of the affected cloud network segment



##    ![Birthday Cake Storyboard - March 8 update](img/csnf-storyboard-bday-cake.png)

## Demo Flow

**A.** The `CSNF` demo implementation uses a contemporary event-driven cloud-native micro-services architecture based on open source eliminating proprietary integration. The event-driven architecture enables minimal coupling, which makes this it a good option for modern security operations center (SOC) applications used in large enterprises today.

**B.** `CSNF` standard events provide simplicity across integration points giving security engineers solid ground they can rely on when consuming and processing events across cloud. That way they can focus on improving security outcomes rather than spending time mapping and testing data transformations. 

**C.** `CSNF` standardized events are then ready to be consumed by SIEM platforms that ingest alert data, and SOAR platforms to trigger play books that minimize toil and human intervention by automated and orchestrating responsive workflow tasks. 

**D.** `CSNF` decoration allows teams to better comprehend and prioritize incident response actions through improved contextualization. The reality is that some applications represent more risk to the organization than others and that's where `CSNF` decoration comes in. 

**E.** Glueware Config Drift and Audit Application will receive a `CSNF` decorated payload from the SOAR and then audit the network configuration by analyzing any changes from the desired configuration state.

**F.** Glueware will trigger a terraform plan and apply the plan based on the prior configuration state in order to restore the network configuration and contain the threat. 

### Changes

To see what's changed in the current version, see [CHANGES.md](https://github.com/onug/CSNF/blob/spring22/birthday-cake/CHANGES.md)

### 
