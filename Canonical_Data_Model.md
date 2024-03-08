# Canonical Data Model
## Table of Contents

1. [Overview](#overview)
    1. [Scope](#csnf-scope)
    1. [Out of Scope](#csnf-out-of-scope)
1. [Canonical Data Model Entities](#canonical-data-model)
    1. [Namespaces](#csnf-namespaces)
    1. [Providers](#csnf-provider)
    1. [Event](#csnf-event)
    1. [Resource](#csnf-resource)
    1. [Service](#csnf-service)
    1. [Threat Actor](#csnf-threat-actor)
    1. [Decorator](#csnf-decorator)
 
## <a name="overview"></a>Overview

What is the Cloud Security Notification Framework (CSNF)? CSNF is an Open Source initiative tackling the difficulty of providing security assurance for Cloud at scale caused by the large volume of events and security state messaging. The problem is compounded when using multiple Cloud Service Providers (CSP’s) due to the the lack of standardized events and alerts amongst CSP’s.  

CSNF defines a Canonical Data Model as well as interpretation and decoration patterns that can be used to reduce toil, drive consistency and allow enterprises to apply a context-aware approach to security by correlating and acting upon security events across multiple providers at scale. 

### <a name="csnf-scope"></a>Scope
- The focus of initial iterations is on data in the Security space. Other domains (e.g., operational monitoring) may be addressed in the future.
- CSNF does not only include Cloud Providers like Azure, Amazon, Google, Oracle, but also security solutions / services from Symantec, Fortinet, Splunk, etc.
- Format of the taxonomy is scoped to CSV, JSON, and YAML.

### <a name="csnf-out-of-scope"></a>Out of Scope
- The specific technology as to how do these CSPs protect security perimeter.
- Security Solutions not protecting cloud workloads.


## <a name="canonical-data-model"></a>Canonical Data Model Entities

### <a name="csnf-namespaces"></a>CSNF Namespaces

The CSNF namespaces are used to help categorize and standardize events across multiple providers. The namespace  provides a high level categorization for event data, so that customers can better analyze, visualize, and correlate the data represented in their events.

CSNF improvements are released following [Semantic Versioning](https://semver.org/).

### <a name="csnf-provider"></a>Provider

Fields related to the cloud (Iaas, SaaS or PasS) infrastructure the events are coming from.

| Element details**    | CSNF Element Type | CSNF Namespace | Required? | CSNF Description                                                                                                   |
| ------------------ | ----------------- | -------------- | --------- | ------------------------------------------------------------------------------------------------------------------ |
| provider.guid      | guid              | .provider      | Yes       | Identifier                                                                                                         |
| provider.type      | type              | .provider      | No        | IaaS, SaaS or PaaS                                                                                                 |
| provider.product   | product           | .provider      | Yes       | Source product service name from the vendor to indicate the origin (e.g. Azure Defender, Oracle Cloud Guard, etc.) |
| provider.name      | name              | .provider      | Yes       | The cloud account name or alias used to identify different entities in a multi-tenant environment.                 |
| provider.accountId | accountId         | .provider      | Yes       | The cloud account or organization id used to identify different entities in a multi-tenant environment.            |

### <a name="csnf-event"></a>Event

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

### <a name="csnf-resource"></a>Resource

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


### Service
### <a name="csnf-service"></a>Service


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

### <a name="csnf-threat-actor"></a>Threat Actor


The threat actor is the entity that initiated the event

| Element details                  | CSNF Element Type     | CSNF Namespace | Required? | CSNF Description                                                                     |
| -------------------------------- | --------------------- | -------------- | --------- | ------------------------------------------------------------------------------------ |
| threatactor.guid                 | guid                  | .threatactor   | No        | Threat actor identifier                                                              |
| threatactor.type                 | Type                  | .threatactor   | No        | Threat actor type                                                                    |
| threatactor.name                 | Name                  | .threatactor   | No        | Threat actor name                                                                    |
| threatactor.additionalProperties | Additional Properties | .threatactor   | No        | Key-Value pairs or property bag for additional missing but critical event properties |

### <a name="csnf-decorator"></a>Decorator

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