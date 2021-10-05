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
import {Decorator, BaseDecorator, CsnfEvent} from "onug-csnf";

const logger = log4js.getLogger('mitre-decorator');
logger.level = process.env.LOG_LEVEL || 'info';

export default class MitreDecorator extends BaseDecorator implements Decorator {
    constructor() {
        super('mitre');
    }

    async getEventDecoration(csnfEvent: CsnfEvent) {
        logger.trace('> getEventDecoration');
        logger.trace('< getEventDecoration');
        return {
            tactic: {
                id: 'TA002',
                name: 'Execution',
                url: 'https://attack.mitre.org/tactics/TA0002'
            },
            technique: {
                id: 'T1609',
                name: 'Container Administration Command',
                url: 'https://attack.mitre.org/techniques/T1609'
            },
            mitigations: [
                {
                    id: 'M1038',
                    name: 'Execution Prevention',
                    url: 'https://attack.mitre.org/mitigations/M1038'
                },
                {
                    id: 'M1035',
                    name: 'Limit Access to Resource Over Network',
                    url: 'https://attack.mitre.org/mitigations/M1035'
                },
                {
                    id: 'M1026',
                    name: 'Privileged Account Management',
                    url: 'https://attack.mitre.org/mitigations/M1026'
                }
            ]
        };
    }
}

