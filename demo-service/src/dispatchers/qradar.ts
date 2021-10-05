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
import * as https from "https";
import {BaseDispatcher, Dispatchers} from "./base-dispatcher";

const logger = log4js.getLogger('qradar-dispatcher');
logger.level = process.env.LOG_LEVEL || 'info';

export default class QradarDispatcher extends BaseDispatcher {
    private qradarUrl: string

    constructor() {
        super(Dispatchers.QRADAR);

        logger.trace('> constructor');
        this.qradarUrl = process.env.QRADAR_URL;
        logger.trace('< constructor');
    }

    async dispatch(originalEvent: any, csnfEvent: CsnfEvent, csnfDecoration: any) {
        logger.trace('> dispatch');

        csnfEvent.metadata.guid = 'n/a';

        const payload = {
            event: csnfEvent,
            decoration: csnfDecoration
        };

        try {
            const result = await axios.post(this.qradarUrl, payload, {
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


