/**
 * (C) Copyright IBM Corp. 2021.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as log4js from 'log4js';
import {v4 as uuid} from 'uuid';
import {CsnfEvent} from 'onug-csnf';
import axios from "axios";
import { DefaultAzureCredential } from '@azure/identity';
import {BaseDispatcher, Dispatchers} from "./base-dispatcher";

const logger = log4js.getLogger('azure-sentinel-dispatcher');
logger.level = process.env.LOG_LEVEL || 'info';

const AZURE_SUBSCRIPTION_ID = process.env.AZURE_SENTINEL_SUBSCRIPTION_ID;
const AZURE_RESOURCE_GROUP = process.env.AZURE_SENTINEL_RESOURCE_GROUP;
const AZURE_WORKSPACE = process.env.AZURE_SENTINEL_WORKSPACE;
const AZURE_API_VERSION = '2020-01-01';

export default class AzureSentinelDispatcher extends BaseDispatcher {
    private azureCredential: DefaultAzureCredential;

    constructor() {
        super(Dispatchers.AZURE_SENTINEL);

        logger.trace('> constructor');
        this.azureCredential = new DefaultAzureCredential();

        logger.trace('< constructor');
    }

    async dispatch(originalEvent: any, csnfEvent: CsnfEvent, csnfDecoration: any) {
        logger.trace('> dispatch');

        const incidentId = uuid();

        const requestUrl = `https://management.azure.com/subscriptions/${AZURE_SUBSCRIPTION_ID}/`
            + `resourceGroups/${AZURE_RESOURCE_GROUP}/`
            + `providers/Microsoft.OperationalInsights/workspaces/${AZURE_WORKSPACE}/`
            + `providers/Microsoft.SecurityInsights/incidents/${incidentId}?api-version=${AZURE_API_VERSION}`;

        const incident = {
            "properties": {
                "severity": "High",
                "status": "Active",
                "title": csnfEvent.metadata.name,
                "description": csnfEvent.metadata.shortDescription,
                "additionalData": {
                    "alertProductNames": [
                        csnfEvent.resources[0].platform,
                        csnfEvent.resources[0].accountId,
                        csnfEvent.resources[0].region,
                        csnfEvent.resources[0].service,
                        csnfEvent.resources[0].type + ':' + csnfEvent.resources[0].name + ':' + csnfEvent.resources[0].guid
                    ]
                },
                "labels": [
                    {
                        "labelName": csnfEvent.reporter.name,
                        "labelType": "User"
                    }
                ]
            }
        };

        const getTokenResponse = await this.azureCredential.getToken('https://management.azure.com/.default');
        // console.log(getTokenResponse);

        try {
            const result = await axios.put(requestUrl, incident,{
                headers: {
                    'Authorization': `Bearer ${getTokenResponse.token}`
                }
            });
            if (result.status === 200 || result.status === 201) {
                logger.debug('incident successfully dispatched');
            } else {
                logger.error('failed to dispatch incident', result);
            }
        } catch (e) {
            logger.error('failed to dispatch incident', e);
        }

        logger.trace('< dispatch');
    }
}


