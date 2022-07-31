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

import Dictionary from "./dictionary";
import {CsnfEvent} from '../../types/types'
import LogUtil from '../utils/log-util'
const logger = LogUtil.getLogger('dictionary-manager');

export default class DictionaryManager {
    dictionaries: { [name: string]: Dictionary } = {};

    registerDictionary(filePath: string): void {
        logger.trace('> registerDictionary');
        try {
            const dictionary = new Dictionary(filePath);
            this.dictionaries[dictionary.name] = dictionary;
            logger.info(`dictionary ${dictionary.name}:${dictionary.version} registered`);
        } catch (err) {
            logger.error(`failed to register a dictionary from ${filePath}`, err);
        }

        logger.trace('< registerDictionary');
    }

    getEventInterpretation(originalEvent: unknown, dictionaryName: string): CsnfEvent {
        logger.trace('> getEventInterpretation');

        const dictionary = this.dictionaries[dictionaryName];

        if (!dictionary) {
            logger.error(`dictionary '${dictionaryName}' not found`);
            return null;
        }

        const interpretedEvent = dictionary.interpret(originalEvent);
        logger.trace('< getEventInterpretation');
        return interpretedEvent;
    }
}
