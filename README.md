
# <img src="./img/CSNFpix.png" alt="CSNF" width="32"/> Cloud Security Notifications Framework 

![Unit Testing](https://github.com/onug/csnf/actions/workflows/main.yml/badge.svg)

## Table of Contents
1. [Overview](#overview)
1. [Canonical Data Model](./Canonical_Data_Model.md)
1. [Get Started](#getting-started)
    - [Producers – Get started](#provider)
    - [Consumers – Get started](#consumer)
1. [Steering Committee](#steering-committee)
1. [Contributing](#contributing)
1. [License](#license)


## <a name="overview"></a>Overview

CSNF is an Open Source initiative tackling the difficulty of providing security assurance for Cloud at scale caused by the large volume of events and security state messaging. The problem is compounded when using multiple Cloud Service Providers (CSP’s) due to the the lack of standardized events and alerts amongst CSP’s.

Cloud Service Providers follow no industry standard in the generation of security event messaging. This gap translates
into increased toil and decreased efficiency for the enterprise cloud consumer. Cloud Security Notification Framework (
CSNF), being developed by the ONUG Collaborative’s Automated Cloud Governance (ACG) Working Group, is aimed to create a
standardization process without sacrificing innovation. Join the ONUG discussion and learn how CSNF will support your
efforts in delivering more efficient Hybrid Multi-Cloud solutions.

## <a name="getting-started"></a>Get Started
There are three key personas that interact with CSNF.  These are defined as follows and illustrated in the following diagram. Get started information for each of these personas is covered after the diagram.    
1. **Producers.** Include cloud service providers (CSPs) and cloud and on-prem data providers that generate logs as well as security findings or events or alerts. Some examples include Azure, AWS, Google, Oracle, IBM as CSPs and Palo Alto, Cisco, Qualys, etc. 
1. **Consumers.** Include consuming products like SIEM and SOAR and enterprises that use these products or directly integrate with the producers using home grown tools or services. Some examples include Splunk, Microsoft Sentinel, Google Chronicle, etc. as consuming products and Cigna, Intuit, FedEx, etc. as enterprise consumers. 
1. **ONUG Open Community.** Brings together producers, consumers and cybersecurity experts like MITRE, NIST, etc. and establishes governance and standardization principles. ONUG enables productization of standards and enable a connected open community of standards. Key goal is to enable easy way for enterprises to work in the multi-cloud world with standardized and enriched information. This CSNF GitHub enables connecting producers and consumers to connect with CSNF.

![ONUG Vision](/img/CSNFVision.png)

### <a name="provider"></a> Producers – Get started
Producers can get started to connect their information with CSNF with the following steps: 
1. **Map security findings and alerts to CSNF CDM**:
  [Provider CSV Readme](./tools/provider_csv/README.md) is a for mapping Cloud Service Providers (CSPs) or security provider alerts to the ONUG CSF format. Map your security findings to [Provider CSV](./tools/provider_csv/provider.csv).
  Map your common properties across your findings using the  `__default__`  in `Alert Id` column. For additional information see the [Provider CSV Readme](./tools/provider_csv/README.md).

1. **Add Sample Finding(s)**: 
Place one or more unmapped sample findings in the [sample_findings/](./sample_findings) directory.  Name convention - `<producer_name>_<product_name>_<finding_number>.json` ex. `microsoft_defender_1.json`

1. **Validate outcomes.**
Run the [provider_csv_to_provider_json_script](./provider_csv_to_provider_json_script/README.md) to ensure it generates an output JSON file. 
1. **Contribute to the CSNF GitHub repository.** Create a pull request (PR) using following the process defined in [CONTRIBUTING.md](./CONTRIBUTING.md).

### <a name="consumer"></a> Consumers – Get started (Coming soon...)
There are a few different consumer scenarios and get started guidelines for each is shared below.

#### <a name="consumerscenario1"></a> Consumer scenario #1: Consuming product integrations (SIEMs and SOARs)
Consuming SIEMs and SOAR products can integrate with CSNF CDM to provide built-in support for CSNF CDM in SIEMs and SOARs. Detailed steps and architecture diagram coming soon... 

#### <a name="consumerscenario2"></a>  Consumer scenario #2: Consuming enterprises 
Enterprises can directly leverage CSNF integrations delivered by SIEMs and SOARs or connect home grown tools and services to leverage CSNF standardization and enrichment benefits. Get started guidelines for each is shared below.

##### <a name="consumerscenario2ootb"></a> Leverage out-of-the-box CSNF integrations. 
Check out the currently integrated SIEMs, SOARs and products and follow the respective guidance to integrate with CSNF - coming soon

##### <a name="consumerscenario2custom"></a> Connect my tools and services with CSNF.
Follow the guidance below to connect enterprise tools and services with CSNF and customize as needed. 
1.	Detailed steps and links to tools and validations as needed Coming soon...

## <a name="steering-committee"></a>Steering Committee

The CSNF open source initiative benefits from the guidance and participation of over a dozen enterprises and their technology leadership. For current Steering Committee, see [SteeringCommittee.md](./SteeringCommittee.md)

## <a name="contributing"></a>Contributing

Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) page to learn more about how you can contribute to the CSNF `demo-service`.
PLEASE ALSO READ THE CSNF "CONTRIBUTOR CODE OF CONDUCT" (./Covenant_Code_of_Conduct.md)

## <a name="license"></a>License

Distributed under the Apache-2.0 License, see [LICENSE.txt](./LICENSE.txt)
