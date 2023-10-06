# Splunk Technology Add-on for the Cloud Security Notification Framework

## Overview
- The Add-on typically imports and enriches data from the SDK of the CSP, creating a rich data set ready for direct analysis or use in an App. The CSNF Add-on for Splunk will provide the below functionalities:
	- Collect sources data and map to the CSNF's canonical data model.
	- Categorize the data in different sourcetypes.
	- Parse the data and extract important fields.

## Version Support #
9.0, 8.x, 7.x

## Purpose
- The purpose of the CSNF Splunk Technology Add-on is to provide a set of common attribute mappings in support of multi-cloud enterprise security SIEM and SOAR operations.

## Who is this app for? #
- The primary audiance for this application are security detection engineering teams who wish to integrate CSNF within their multi cloud security landing zone.

## How does the app work? #
- It works by mapping keys and values provided by your configured cloud provider to a set of CSNF common properties. The CSNF's canonical data model standardizes alerts received from multiple cloud and SaaS providers that can be used as inputs by the SOC for common security workflows.

## Installation

Follow the below-listed steps to install an Add-on from the bundle:

- Download the App package.
- From the UI navigate to `Apps->Manage Apps`.
- In the top right corner select `Install app from file`.
- Select `Choose File` and select the App package.
- Select `Upload` and follow the prompts.

OR

- Directly from the `Find More Apps` section provided in Splunk Home Dashboard.

## Configuration

## Uninstall Add-on

- To uninstall add-on, user can follow below steps: 
    - SSH to the Splunk instance -> Go to folder apps($SPLUNK_HOME/etc/apps) -> Remove the TA_CSNF folder from apps directory -> Restart Splunk

## Support
- Support Offered: Yes
- Send email to peter.campbell@marlinspike.io
- Support is not guaranteed and will be provided on a best effort basis.

# Release Notes
## v 1.0.0 ##
- Initial release.


# Possible Issues #
- None found yet, but if you find anything let us know!

# Third-party software attributions/credits: #

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
