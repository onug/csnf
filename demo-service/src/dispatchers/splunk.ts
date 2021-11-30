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
import * as https from "https";
import {BaseDispatcher, Dispatchers} from "./base-dispatcher";

const logger = log4js.getLogger('splunk-dispatcher');
logger.level = process.env.LOG_LEVEL || 'debug';

export default class SplunkDispatcher extends BaseDispatcher {
    private splunkUrl: string
    private splunkToken: string

    constructor() {
        super(Dispatchers.SPLUNK);

        logger.trace('> constructor');
        this.splunkUrl = process.env.SPLUNK_URL;
        this.splunkToken = process.env.SPLUNK_TOKEN;
        logger.trace('< constructor');
    }

    async dispatch(originalEvent: any, csnfEvent: CsnfEvent, csnfDecoration: any) {
        logger.trace('> dispatch');

        const requestUrl = `${this.splunkUrl}/services/collector`;

        const payload = {
            event: {
                event: csnfEvent,
                decoration: csnfDecoration
            },
            sourcetype: csnfEvent.reporter.name
        };

        try {
            const result = await axios.post(requestUrl, payload,{
                headers: {
                    'Authorization': `Splunk ${this.splunkToken}`
                },
                httpsAgent: new https.Agent({
                    rejectUnauthorized: false
                })
            });
            if (result.status === 200 || result.status === 201) {
                logger.debug('event successfully dispatched');
            } else {
                logger.error('failed to dispatch event', result);
            }
        } catch (e) {
            logger.error('failed to dispatch event', e);
        }

        logger.trace('< dispatch');
    }
}


