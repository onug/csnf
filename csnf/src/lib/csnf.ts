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

import DictionaryManager from "./dictionaries/dictionary-manager";
import {Decorator, DecoratorManager} from "./decorators";
import {CsnfDecoration, CsnfEvent} from "../types/types";

import LogUtil from './utils/log-util'
const logger = LogUtil.getLogger('csnf');

export class Csnf {
    private dictionaryManager: DictionaryManager = new DictionaryManager();
    private decoratorManager: DecoratorManager = new DecoratorManager();

    registerDictionary(dictionaryFilePath: string): void {
        logger.trace('> registerDictionary', dictionaryFilePath);
        this.dictionaryManager.registerDictionary(dictionaryFilePath)
        logger.trace('< registerDictionary');
    }

    registerDecorator(decorator: Decorator): void {
        logger.trace('> registerDecorator');
        this.decoratorManager.registerDecorator(decorator);
        logger.trace('< registerDecorator');
    }

    getEventInterpretation(originalEvent: unknown, dictionaryName: string): CsnfEvent {
        logger.trace('> getEventInterpretation', dictionaryName);
        const interpretedEvent = this.dictionaryManager.getEventInterpretation(originalEvent, dictionaryName);
        logger.trace('< getEventInterpretation');
        return interpretedEvent;
    }

    async getEventDecoration(csnfEvent: CsnfEvent): Promise<CsnfDecoration[]> {
        logger.trace("> getEventDecoration");
        const eventDecoration = await this.decoratorManager.getEventDecoration(csnfEvent);
        logger.trace("< getEventDecoration");
        return eventDecoration;
    }
}



