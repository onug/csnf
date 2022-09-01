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
import {CsnfEvent} from 'onug-csnf';
import axios from "axios";
import {DefaultAzureCredential} from '@azure/identity';
import {BaseDispatcher, Dispatchers} from "./base-dispatcher";
import {Buffer} from "buffer";
import * as crypto from 'crypto';
import * as moment from 'moment';

const logger = log4js.getLogger('azure-monitor-dispatcher');
logger.level = process.env.LOG_LEVEL || 'info';

const AZURE_WORKSPACE_ID = process.env.AZURE_MONITOR_WORKSPACE_ID;
const AZURE_SHARED_KEY = process.env.AZURE_MONITOR_SHARED_KEY;
const AZURE_API_VERSION = '2016-04-01';

export default class AzureMonitorDispatcher extends BaseDispatcher {
    private azureCredential: DefaultAzureCredential;

    constructor() {
        super(Dispatchers.AZURE_MONITOR);

        logger.trace('> constructor');
        this.azureCredential = new DefaultAzureCredential();

        logger.trace('< constructor');
    }

    async dispatch(originalEvent: any, csnfEvent: CsnfEvent, csnfDecoration: any) {
        logger.trace('> dispatch');

        const logType = 'csnf_events';
        const jsonObj = [{event: csnfEvent, decoration: csnfDecoration}];
        const jsonString = JSON.stringify(jsonObj);
        const contentLength = Buffer.byteLength(jsonString);
        const method = 'POST';
        const contentType = 'application/json';
        const resource = '/api/logs';
        const date = moment().utc().format('ddd, DD MMM YYYY HH:mm:ss ') + 'GMT';

        const xHeader = 'x-ms-date:' + date;
        const stringToHash = [method, contentLength, contentType, xHeader, resource].join('\n');
        const decodedSharedKey = Buffer.from(AZURE_SHARED_KEY, 'base64');

        const hmac = crypto.createHmac('sha256', decodedSharedKey);
        const encodedData = hmac.update(stringToHash);
        const signature = encodedData.digest().toString('base64');

        const requestUrl = `https://${AZURE_WORKSPACE_ID}.ods.opinsights.azure.com/api/logs?api-version=${AZURE_API_VERSION}`;

        try {
            const result = await axios.post(requestUrl, jsonString, {
                headers: {
                    'Authorization': `SharedKey ${AZURE_WORKSPACE_ID}:${signature}`,
                    'Log-Type': logType,
                    'x-ms-date': date,
                    'Content-Type': 'application/json'
                }
            });
            if (result.status === 200 || result.status === 201) {
                logger.debug('log successfully dispatched');
            } else {
                logger.error('failed to dispatch log', result);
            }
        } catch (e) {
            logger.error('failed to dispatch log', e);
        }

        logger.trace('< dispatch');
    }
}


