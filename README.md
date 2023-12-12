
# Cloud Security Notification Framework 

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

Tired of the mental gymnastics of understanding bespoke security log message formats? **CSNF** provides a common data model for security notifications from all cloud providers and related vendor tools. 

Ideal for incident response teams, where every second counts in an investigation, but flexible enough to help all security engineering teams working across multiple clouds and platforms to better understand and build automation around observability data. 

Our goal is to produce a standardized mapping of security log fields that simplifies the numerous systems present in a modern organization. 

## <a name="getting-started"></a>Get Started

### <a name="splunk"></a> Splunk
If you or your organization uses Splunk, getting started with CSNF should be as easy as [installing the CSNF Splunk TA](https://splunkbase.splunk.com/app/6880).

### <a name="producers"></a> Producers
If you manage a tool or product expected to output logs ingested by security teams, check out [the Canonical Data Model](https://csnf.netlify.app/docs/tasks/canonical-model/) and leverage our fields for your log outputs.

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
1.	Detailed steps and links to tools and validations as needed Coming soon..

## <a name="steering-committee"></a>Steering Committee

The CSNF open source initiative benefits from the guidance and participation of over a dozen enterprises and their technology leadership. For current Steering Committee, see [SteeringCommittee.md](./SteeringCommittee.md)

## <a name="contributing"></a>Contributing

Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) page to learn more about how you can contribute to the CSNF `demo-service`.
PLEASE ALSO READ THE CSNF "CONTRIBUTOR CODE OF CONDUCT" (./Covenant_Code_of_Conduct.md)

## <a name="license"></a>License

Distributed under the Apache-2.0 License, see [LICENSE.txt](./LICENSE.txt)
