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

import * as fs from "fs";
import {CanonicalDataModelV0_0_1 as DataModel} from "./canonical-data-model";
import {CsnfEvent} from '../../types/types';
import ProcessorManager from "./processors/processor-manager";
import LogUtil from "../utils/log-util";
import {InstructionArray} from "./instruction";

const logger = LogUtil.getLogger('dictionary');

export default class Dictionary {
    readonly name: string;
    readonly version: string;
    readonly content: { [key: string]: InstructionArray };

    constructor(dictionaryFilePath: string) {
        logger.trace('> constructor');

        logger.debug(`creating a dictionary from '${dictionaryFilePath}'`);

        const dictionaryString = fs.readFileSync(dictionaryFilePath, 'utf-8');
        const dictionaryJson = JSON.parse(dictionaryString);

        this.name = dictionaryJson['dictionary.name'];
        this.version = dictionaryJson['dictionary.version'];
        this.content = dictionaryJson;

        if (!this.name) throw 'Invalid dictionary, missing dictionary name';
        if (!this.version) throw 'Invalid dictionary, missing dictionary version';
        if (!this.content) throw 'Invalid dictionary, missing dictionary content';

        logger.trace('< constructor');
    }

    public interpret(originalEvent: unknown): CsnfEvent {
        logger.trace('> getEventInterpretation');

        const e: CsnfEvent = {
            metadata: {
                guid: this.interpretEntry(originalEvent, DataModel.EVENT_GUID),
                name: this.interpretEntry(originalEvent, DataModel.EVENT_NAME),
                url: this.interpretEntry(originalEvent, DataModel.EVENT_URL),
                severity: this.interpretEntry(originalEvent, DataModel.EVENT_SEVERITY),
                shortDescription: this.interpretEntry(originalEvent, DataModel.EVENT_SHORT_DESCRIPTION),
                longDescription: this.interpretEntry(originalEvent, DataModel.EVENT_LONG_DESCRIPTION),
                time: this.interpretEntry(originalEvent, DataModel.EVENT_TIME)
            },
            producer: {
                name: this.interpretEntry(originalEvent, DataModel.PRODUCER_NAME)
            },
            reporter: {
                name: this.interpretEntry(originalEvent, DataModel.REPORTER_NAME)
            },
            resources: [{
                guid: this.interpretEntry(originalEvent, DataModel.RESOURCE_GUID),
                name: this.interpretEntry(originalEvent, DataModel.RESOURCE_NAME),
                region: this.interpretEntry(originalEvent, DataModel.RESOURCE_REGION),
                platform: this.interpretEntry(originalEvent, DataModel.RESOURCE_PLATFORM),
                service: this.interpretEntry(originalEvent, DataModel.RESOURCE_SERVICE),
                type: this.interpretEntry(originalEvent, DataModel.RESOURCE_TYPE),
                accountId: this.interpretEntry(originalEvent, DataModel.RESOURCE_ACCOUNT_ID),
                package: this.interpretEntry(originalEvent, DataModel.RESOURCE_PACKAGE)
            }]
        }

        logger.trace('< getEventInterpretation');

        return e;

    }

    private interpretEntry(originalEvent: unknown, dictionaryEntry: string) {
        logger.trace('> interpret', this.name, dictionaryEntry);


        // eslint-disable-next-line no-prototype-builtins
        if (!this.content.hasOwnProperty(dictionaryEntry)) {
            logger.warn(`entry ${dictionaryEntry} not found in the ${this.name} dictionary`);
            return null;
        }
        const instructions = this.content[dictionaryEntry];

        let output;

        try {
            if (['string','number','boolean'].includes(typeof(instructions))){
                output = instructions;
            } else {
                const instructionsArray: InstructionArray = this.content[dictionaryEntry];
                output = ProcessorManager.get().executeInstructionArray(originalEvent, instructionsArray);
            }
            logger.debug(`interpreted ${dictionaryEntry} from ${this.name} dictionary as ${output} (type=${typeof(output)})`);
        } catch (err) {
            logger.error(`failed to interpret ${dictionaryEntry} from ${this.name} dictionary: `, err);
            output = null;
        }

        logger.trace('< interpret');
        return output;
    }
}
