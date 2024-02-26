
# <img src="./img/CSNFpix.png" alt="CSNF" width="32"/> Cloud Security Notifications Framework 

![Unit Testing](https://github.com/onug/csnf/actions/workflows/main.yml/badge.svg)

## Table of Contents

1. [Overview](#overview)
1. [Getting Started](#getting-started)
    1. [Splunk Plugin](#splunk)
1. [Canonical Data Model](./Canonical_Data_Model.md)
1. [Contributing Mappings to CSNF](#contributing-mappings-csnf)
    1. [Event Producers](#producers)
    1. [Producers Getting Started](#provider-getting-started)
1. [Contributing](#contributing)
1. [License](#license)

## <a name="overview"></a>Overview

Tired of the mental gymnastics of understanding bespoke security log message formats? **CSNF** provides a common data model for security notifications from all cloud providers and related vendor tools. 

Ideal for incident response teams, where every second counts in an investigation, but flexible enough to help all security engineering teams working across multiple clouds and platforms to better understand and build automation around observability data. 

Our goal is to produce a standardized mapping of security log fields that simplifies the numerous systems present in a modern organization. 

## <a name="getting-started"></a>Getting Started

### <a name="splunk"></a> Splunk
If you or your organization uses Splunk, getting started with CSNF should be as easy as [installing the CSNF Splunk Technology Add-on (TA)](https://splunkbase.splunk.com/app/6880).

With the installation of the Splunk TA, your organization will be able to access and visualize the existing mappings as metadata fields across your cloud indices. 

## <a name="contributing-mappings-csnf"></a>Contributing Mappings to CSNF

### <a name="Producer"></a> Event Providers
If you manage a tool or product expected to output logs ingested by security teams, check out [the CSNF Schema](./mappings/schema.yml) and leverage our fields for your log outputs.

To learn what fields are available and their meaning please see the [Canonical Data Model](./Canonical_Data_Model.md).

### <a name="Producer-getting-started"></a>Producer – Getting started
Producers can get started to connect their information with CSNF with the following steps: 
1. **Map security findings and alerts to CSNF CDM**:
  [Provider CSV Readme](./mappings/README.md) is a for mapping Cloud Service Providers (CSPs) or security provider alerts to the ONUG CSF format. Map your security findings to [Provider CSV](./mappings/provider.csv).
  Map your common properties across your findings using the  `__default__`  in `Alert Id` column. For additional information see the [Provider CSV Readme](.//README.md).

1. **Add Sample Finding(s)**: 
Place one or more unmapped sample findings in the [sample_findings/](./sample_findings) directory.  Name convention - `<producer_name>_<product_name>_<finding_number>.json` ex. `microsoft_defender_1.json`

1. **Validate outcomes.**
Run the [provider_csv_to_provider_json_script](./tools/provider_csv_to_provider_json_script/README.md) to ensure it generates an output JSON file. 
1. **Contribute to the CSNF GitHub repository.** Create a pull request (PR) using following the process defined in [CONTRIBUTING.md](./CONTRIBUTING.md).

## <a name="contributing"></a>Contributing

Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) page to learn more about how you can contribute to the CSNF `demo-service`.

**Please also read the CSNF [Contributor Code Of Conduct](./Covenant_Code_of_Conduct.md)**.

## <a name="license"></a>License

Distributed under the Apache-2.0 License, see [LICENSE.txt](./LICENSE.txt)
