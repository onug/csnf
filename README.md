# Cloud Security Notifications Framework

CSNF is an Open Source initiative tackling the difficulty of providing security assurance for Cloud at scale caused by the large volume of events and security state messaging. The problem is compounded when using multiple Cloud Service Providers (CSP’s) due to the the lack of standardized events and alerts amongst CSP’s.

Cloud Service Providers follow no industry standard in the generation of security event messaging. This gap translates
into increased toil and decreased efficiency for the enterprise cloud consumer. Cloud Security Notification Framework (
CSNF), being developed by the ONUG Collaborative’s Automated Cloud Governance (ACG) Working Group, is aimed to create a
standardization process without sacrificing innovation. Join the ONUG discussion and learn how CSNF will support your
efforts in delivering more efficient Hybrid Multi-Cloud solutions.

## Canonical Data Model

CSNF defines a Canonical Data Model as well as interpretation and decoration patterns that can be used to reduce toil, drive consistency and allow enterprises to apply a context-aware approach to security by corellating and acting upon security events across multiple providers at scale. 

### Canonical Data Model Entities (Version 0.0.1)

#### Event

| Entity | Property | Full name|
|---|---|---|
| event | name | event.name | 
| event | guid | event.guid|
| event | url | event.url|
| event | shortDescription | event.shortDescription |
| event | longDescription | event.longDescription |
| event | severity | event.severity| 
| event | time| event.time|
| event | name | event.name |

#### Reporter

| Entity | Property | Full name  |
|---|---|---|
| reporter | name | reporter.name |

#### Producer

| Entity | Property | Full name  |
|---|---|---|
| producer | name | producer.name |

#### Resource

| Entity | Property | Full name|
|---|---|---|
| resource | guid | event.guid|
| resource | type | event.type |
| resource | name | event.name |
| resource | accountId | event.accountId | 
| resource | platform | event.platform|
| resource | service | event.service| 
| resource | region| event.region|
| resource | package | event.package |

## Getting Started

This repository contains a proof-of-concept implementation of CSNF. The code is split into two directories:

* `csnf` directory contains the core framework of interpreting events
* `demo-service` directory contains a set of sample dictionaries, as well as a web application receiving events from various event producers and dispatching them to event receivers like Azure Sentinel, IBM Cloud Security Center, IBM QRadar, Splunk and more.  The `demo-service` can be run in Docker for local testing of CSNF. There is a [README.md](./demo-service/README.md) that explains how to run the `demo-service` using Docker.

## Building dictionaries

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

## Contributing

Please read the [CONTRIBUTING.md](./demos/demo-service/CONTRIBUTING.md) page to learn more about how you can contribute to the CSNF `demo-service`.
PLEASE ALSO READ THE CSNF "CONTRIBUTOR CODE OF CONDUCT" (./Covenant_Code_of_Conduct.md)

## License

Distributed under the Apache-2.0 License, see [LICENSE.txt](./LICENSE.txt)





