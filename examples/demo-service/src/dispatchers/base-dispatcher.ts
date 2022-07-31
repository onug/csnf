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

import * as log4js from "log4js";
import {CsnfEvent} from 'onug-csnf';

const logger = log4js.getLogger('base-dispatcher');
logger.level = process.env.LOG_LEVEL || 'debug';

export enum Dispatchers {
    IBM_SCC = 'ibm-scc',
    AZURE_SENTINEL = 'azure-sentinel',
    AZURE_MONITOR = 'azure-monitor',
    SPLUNK = 'splunk',
    KAFKA = 'kafka',
    QRADAR = 'qradar',
    DEBUG = 'debug',
    ALL = 'all'
}

export interface Dispatcher {
    name: Dispatchers;
    dispatch(originalEvent: any, csnfEvent: CsnfEvent, csnfDecoration: any);
}

export abstract class BaseDispatcher implements Dispatcher {
    public name: Dispatchers;

    protected constructor(name: Dispatchers) {
        this.name = name;
    }

    abstract dispatch(originalEvent: any, csnfEvent: CsnfEvent, csnfDecoration: any);
}
