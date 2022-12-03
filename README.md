
# Cloud Security Notifications Framework 
## Table of Contents
1. [Overview](#overview)
1. [Canonical Data Model](#canonical-data-model)
1. [Getting Started](#getting-started)
1. [Building dictionaries](#building-dictionaries)
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


## <a name="canonical-data-model"></a>Canonical Data Model

### What is it?

What is the Cloud Security Notification Framework (CSNF)? CSNF is an Open Source initiative tackling the difficulty of providing security assurance for Cloud at scale caused by the large volume of events and security state messaging. The problem is compounded when using multiple Cloud Service Providers (CSP’s) due to the the lack of standardized events and alerts amongst CSP’s.  
CSNF defines a Canonical Data Model as well as interpretation and decoration patterns that can be used to reduce toil, drive consistency and allow enterprises to apply a context-aware approach to security by correlating and acting upon security events across multiple providers at scale. 

### Canonical Data Model Entities

#### CSNF Namespaces

The CSNF namespaces are used to help categorize and standardize events across multiple providers. The namespace  provides a high level categorization for event data, so that customers can better analyze, visualize, and correlate the data represented in their events.

CSNF improvements are released following [Semantic Versioning](https://semver.org/).

#### Provider

Fields related to the cloud (Iaas, SaaS or PasS) infrastructure the events are coming from.

| Element details    | CSNF Element Type | CSNF Namespace | Required? | CSNF Description                                                                                                   |
| ------------------ | ----------------- | -------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| provider.guid      | guid              | .provider      | Yes       | Identifier                                                                                                         |
| provider.type      | type              | .provider      | No        | IaaS, SaaS or PaaS                                                                                                 |
| provider.product   | product           | .provider      | Yes       | Source product service name from the vendor to indicate the origin (e.g. Azure Defender, Oracle Cloud Guard, etc.) |
| provider.name      | name              | .provider      | Yes       | The cloud account name or alias used to identify different entities in a multi-tenant environment.                 |
| provider.accountId | accountId         | .provider      | Yes       | The cloud account or organization id used to identify different entities in a multi-tenant environment.            |

#### Event

Any observable occurrence in the operations of an information technology service is an event. 

Note: A security event is an observable occurrence that could affect your security posture. Each organization has  its own threshold for designating an event as a security event

| Element details              | CSNF Element Type       | CSNF Namespace | Required? | CSNF Description                                                                                                                                                                                            |
| ---------------------------- | ----------------------- | -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| event.guid                   | guid                    | .event         | Yes       | Identifier                                                                                                                                                                                                  |
| event.relatedEvent           | array                   | .event         | No        |                                                                                                                                                                                                             |
| event.accountId              | ResourceId              | .event         | No        | The cloud account or organization id used to identify different entities in a multi-tenant environment.                                                                                                     |
| event.time                   | time                    | .event         | Yes       | Time - The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.                           |
| event.timezone               | timezone                | .event         | No        |                                                                                                                                                                                                             |
| event.geolocation.country    | geolocation             | .event         | No        | Geolocation includes country, state, city, zip and latitude, longitude information                                                                                                                          |
| event.geolocation.postalcode | geolocation             | .event         | No        | Geolocation includes country, state, city, zip and latitude, longitude information                                                                                                                          |
| event.geolocation.state      | geolocation             | .event         | No        | Geolocation includes country, state, city, zip and latitude, longitude information                                                                                                                          |
| event.geolocation.city       | geolocation             | .event         | No        | Geolocation includes country, state, city, zip and latitude, longitude information                                                                                                                          |
| event.geolocation.ipv4       | geolocation             | .event         | No        | Geolocation includes country, state, city, zip and latitude, longitude information                                                                                                                          |
| event.geolocation.ipv6       | geolocation             | .event         | No        | Geolocation includes country, state, city, zip and latitude, longitude information                                                                                                                          |
| event.geolocation.latitude   | geolocation             | .event         | No        | Geolocation includes country, state, city, zip and latitude, longitude information                                                                                                                          |
| event.geolocation.longitude  | geolocation             | .event         | No        | Geolocation includes country, state, city, zip and latitude, longitude information                                                                                                                          |
| event.severity               | Severity                | .event         | Yes       | Event severity set by the provider                                                                                                                                                                          |
| event.state                  | State                   | .event         | No        | Event state whether active or resolved                                                                                                                                                                      |
| event.url                    | URL                     | .event         | Yes       | Direct URL link to the event for details                                                                                                                                                                    |
| event.name                   | Name                    | .event         | Yes       | Name of event                                                                                                                                                                                               |
| event.shortDescription       | shortDescription        | .event         | No        | Brief description of event                                                                                                                                                                                  |
| event.longDescription        | longDescription         | .event         | No        | Detailed description of event                                                                                                                                                                               |
| event.additionalProperties   | additionalProperties    | .event         | No        | Key-Value pairs or property bag for additional missing but critical event properties. Includes labels.                                                                                                      |
| event.timeStart              | Event start time        | .event         | Yes       | Time at which the event ocurred. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. |
| event.timeEnd                | Event end time          | .event         | No        | Time at which the event ended. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.   |
| event.timeUpdated            | Event update time (NEW) | .event         | Yes       | Time - The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.                           |
| event.type                   | String                  | .event         | No        | Enumeration of Event type - for e.g., Threat, WAF, etc. for security namespace (NEED A STAND LIST)                                                                                                          |
| event.recommendation         | Recommendations         | .event         | No        |                                                                                                                    

#### Resource

A resource types describes the resources that the finding refers to.

| Element details               | CSNF Element Type     | CSNF Namespace | Required? | CSNF Description                                                                                                                                      |
| ----------------------------- | --------------------- | -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| resource.accountId            | ResourceId            | .resource      | No        | The cloud account or organization id used to identify different entities in a multi-tenant environment.                                               |
| resource.group                | ResourceGroup         | .resource      | No        | Group this resource belongs to                                                                                                                        |
| resource.guid                 | Guid                  | .resource      | No        | Resource identifier                                                                                                                                   |
| resource.type                 | Type                  | .resource      | No        | Resource type                                                                                                                                         |
| resource.name                 | Name                  | .resource      | No        | Resource name                                                                                                                                         |
| resource.region               | Region                | .resource      | No        | Resource geolocation includes country, state, city, zip and latitude, longitude information --> update this to make this region for the resource only |
| resource.zone                 | Zone                  | .resource      | No        | Resource zone                                                                                                                                         |
| resource.url                  | URL                   | .resource      | No        | Resource URL / URI                                                                                                                                    |
| resource.criticality          | Criticality           | .resource      | No        | If the resource is critcial or not                                                                                                                    |
| resource.additionalProperties | Additional Properties | .resource      | No        | Key-Value pairs or property bag for additional missing but critical event properties                                                                  |
#### Service

The service type describes the service for or from which the data was collected. The cloud service name is intended to distinguish services running on different platforms within a provider

| Element details             | CSNF Element Type     | CSNF Namespace | Required? | CSNF Description                                                                           |
| --------------------------- | --------------------- | -------------- | --------- | ------------------------------------------------------------------------------------------ |
| service.guid                | Guid                  | .service       | No        | Service being monitored - identifier                                                       |
| service.type                | Type                  | .service       | No        | Service type                                                                               |
| service.name                | Name                  | .service       | No        | Service name                                                                               |
| service.region              | Region                | .service       | No        | Service geolocation includes country, state, city, zip and latitude, longitude information |
| service.zone                | Zone                  | .service       | No        | Service zone                                                                               |
| service.url                 | URL                   | .service       | No        |                                                                                            |
| service.addtionalProperties | Additional Properties | .service       | No        | Key-Value pairs or property bag for additional missing but critical event properties       |

#### Threat Actor

The threat actor is the entity that initiated the event

| Element details                  | CSNF Element Type     | CSNF Namespace | Required? | CSNF Description                                                                     |
| -------------------------------- | --------------------- | -------------- | --------- | ------------------------------------------------------------------------------------ |
| threatactor.guid                 | guid                  | .threatactor   | No        | Threat actor identifier                                                              |
| threatactor.type                 | Type                  | .threatactor   | No        | Threat actor type                                                                    |
| threatactor.name                 | Name                  | .threatactor   | No        | Threat actor name                                                                    |
| threatactor.additionalProperties | Additional Properties | .threatactor   | No        | Key-Value pairs or property bag for additional missing but critical event properties |

#### Decorator

The CSNF decorator provides context awareness for security events in terms of risk, threat, compliance, asset value. The Cloud consumer can also apply a custom decorator to the event based on their own unique business context, for example a custom decoration based on asset value based on criticality, cost or sensitivity could be applied to the event in order to better contextualize and prioritize response based on business context.

The decorator type allows additional context to be added to an individual event from a trusted source without mutating the base event.  There can be multiple decorators applied to the base event. The combination of standardized security events along with correlated knowledge and analytics processing provide new capabilities for the organizations security team to develop and apply fine-grained secuirty policy based on contextual awareness that was previously unknown.


| Element details              | CSNF Element Type   | CSNF Namespace | Required? | CSNF Description                                      |
| ---------------------------- | ------------------- | -------------- | --------- | ----------------------------------------------------- |
| decorator.references         | References          | .decorator     | No        | The source of enrichment information                  |
| decorator.compliance         | Compliance          | .decorator     | No        | Compliance status of enrichment source                |
| decorator.risk               | Risk                | .decorator     | No        | Risk of the event                                     |
| decorator.dataClassification | Data Classification | .decorator     | No        | Event classification                                  |
| decorator.behavior           | Behavior            | .decorator     | No        | Behavior of entity associated with the event          |
| decorator.vulnerability      | Vulnerability       | .decorator     | No        | Vulnerability information pertaining to the event     |
| decorator.threat             | Threat              | .decorator     | No        | Threat information pertaining to the event            |
| decorator.custom1            | Custom1             | .decorator     | No        | Additional custom information pertaining to the event |
| decorator.custom2            | Custom2             | .decorator     | No        | Additional custom information pertaining to the event |

## <a name="getting-started"></a>Getting Started

This repository contains a proof-of-concept implementation of CSNF. The code is split into two directories:

* `csnf` directory contains the core framework of interpreting events
* `demo-service` directory contains a set of sample dictionaries, as well as a web application receiving events from various event producers and dispatching them to event receivers like Azure Sentinel, IBM Cloud Security Center, IBM QRadar, Splunk and more.  The `demo-service` can be run in Docker for local testing of CSNF. There is a README.md that explains how to run the `demo-service` using Docker.

## <a name="steering-committee"></a>Steering Committee

The CSNF open source initiative benefits from the guidance and participation of over a dozen enterprises and their technology leadership. For current Steering Committee, see [SteeringCommittee.md](./SteeringCommittee.md)

## <a name="building-dictionaries"></a>Building dictionaries

CSNF framework uses JSON-based dictionaries provided by event producers to interpret proprietary event models into the Canonical Data Model. You can see sample dictionaries under `demo-service/dictionaries`. Dictionaries allow to map Canonical Data Model entries into set of instructions to be performed on the source event. Each instruction is comprised of `processor`, `command` and `param` values. 

See sample instruction set below:

```
  "resource.accountId": [
    {
      "processor": "jsonpath",
      "command": "$.ResourceIdentifiers[0].AzureResourceTenantId"
    }
  ],
```

The above instruction will use jsonpath processor to extract the value to be interpreted as `resourcec.accountId`. So in case of below source event

```
{
  ...
  "ResourceIdentifiers": [{
      "AzureResourceTenantId": "abcd1234"
      ...
    },
    {...}, {...}
  ],
  ...
}
```

The extracted value will be `abcd1234`.

When instruction set contains more than one instructions, the execution is chained, meaning that first instruction will be performed on the original event, and each subsequent instruction will be performed on the output of the previous one. 

Below are the supported instructions (processors, commands, params) used in the CNSF proof-of-concept. 

| Processor | Command | Param | Description | 
|---|---|---|---|
|array|element-at-index|number| Extracts element at the index specified as param from an array |
|array|join|string| Joins array elements using param value|
|json| parse | n/a | Parses string as JSON object|
|json| stringify |n/a| Converts JSON object to string |
|jsonpath|JSONPath expression|n/a|Executes JSONPath expression on a JSON object|
|string|to-lower-case|n/a|Converts string to lower case|
|string|to-upper-case|n/a|Converts string to upper case|
|string|split|string|Splits string to array of elements using param as a separator|
|string|prepend|string|Prepends string with param|
|string|append|string|Appends param at the end of the string|
|string|regex|regex expression|Executes regex expression on the string|
|string|concat|array of instructions|Executes instructions defined as param and returns concatenated results|

## <a name="contributing"></a>Contributing

Please read the [CONTRIBUTING.md](./demos/demo-service/CONTRIBUTING.md) page to learn more about how you can contribute to the CSNF `demo-service`.
PLEASE ALSO READ THE CSNF "CONTRIBUTOR CODE OF CONDUCT" (./Covenant_Code_of_Conduct.md)

## <a name="license"></a>License

Distributed under the Apache-2.0 License, see [LICENSE.txt](./LICENSE.txt)
