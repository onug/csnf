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

import {BaseProcessor, Processor} from "./base-processor";
import LogUtil from "../../utils/log-util";

const logger = LogUtil.getLogger('array-processor');

export class ArrayProcessor extends BaseProcessor implements Processor {

    process(input: Array<unknown>, command: string, param: string | number): unknown {
        logger.trace('> process');
        let output;
        switch (command) {
            case 'element-at-index':
                output = input[param as number];
                break;
            case 'join':
                output = input.join(param as string);
                break;
            default:
                logger.error('unrecognized command', command);
                output = null;
        }
        logger.trace('< process');
        return output;
    }
}