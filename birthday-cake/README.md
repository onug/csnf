**The CSNF demo-service runs on Docker**

# Changes

To see what's changed in the current version, see [CHANGES.md](https://github.com/onug/CSNF/blob/spring22/birthday-cake/CHANGES.md)

# CSNF Birthday Cake - Spring 2022

The `CSNF` Spring 2022 demo extends the prior release of the CSNF by including an end-to-end anomalous user activity SOC scenario.

## Implementation storyboard
**Overview:** `CSNF` is an open standard for standardizing and decorating security events. `CSNF` is implementation-agnostic which provides optionality for consumers when using `CSNF` in their  security event pipeline. `CSNF's` decorator provides enrichment capabilities allowing rapid event contextualization limiting the need for human intervention. By filtering out the noise response to threats can be accelerated without having to increase the workload of already overstretched security teams

**A.** The `CSNF` demo implementation uses a contemporary event-driven cloud-native micro-services architecture based on open source eliminating proprietary integration. The vent-driven architecture enables minimal coupling, which makes this it a good option for modern security operations center (SOC) applications used by large enterprises today.

**B.** `CSNF` standard events provide simplicity across integration points giving security engineers solid ground they can rely on when consuming and processing events across cloud. That way they can focus on improving security outcomes rather than spending time mapping and testing data transformations. 

**C.** `CSNF` standardized events are then ready to be consumed by SIEM platforms that ingest alert data, and SOAR platforms to trigger play books that minimize toil and human intervention by automated and orchestrating responsive workflow tasks. 

**D.** `CSNF` decoration allows teams to better comprehend and prioritize incident response actions through improved contextualization. The reality is that some applications represent increased more risk to the organization than others and thats where CSNF decoration comes in. 

### CSNF Anomalous User Activity SOC Scenario Storyboard

   ![Birthday Cake Storyboard - March 8 update](img/csnf-storyboard-bday-cake.png)

