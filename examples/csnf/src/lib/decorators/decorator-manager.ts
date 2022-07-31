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

import {BaseDecorator, Decorator} from "./decorator"
import {CsnfEvent, CsnfDecoration} from '../../types/types'
import LogUtil from '../utils/log-util'
const logger = LogUtil.getLogger('decorator-manager');

export default class DecoratorManager {
    private decorators: { [type: string]: Decorator } = {};

    registerDecorator(decorator: Decorator): void {
        logger.trace('> registerDecorator');

        if (decorator instanceof BaseDecorator) {
            this.decorators[decorator.name] = decorator;
            logger.info(`decorator ${decorator.name} registered`);
        } else {
            logger.error('supplied object does not extend BaseDecorator');
        }

        logger.trace('< registerDictionary');
    }

    async getEventDecoration(csnfEvent: CsnfEvent): Promise<CsnfDecoration[]> {
        logger.trace("> getEventDecoration");
        const eventDecoration: CsnfDecoration[] = [];
        for (const decoratorEntry of Object.entries(this.decorators)) {
            const name = decoratorEntry[0];
            const decorator = decoratorEntry[1];
            logger.debug(`decorating by ${name}`);
            eventDecoration.push({
                decorator: name,
                timestamp: new Date().toISOString(),
                payload: await decorator.decorate(csnfEvent)
            });
        }
        logger.trace("< getEventDecoration");
        return eventDecoration;
    }
}
