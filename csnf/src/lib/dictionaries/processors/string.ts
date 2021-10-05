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
import ProcessorManager from "./processor-manager";
import LogUtil from "../../utils/log-util";
import { InstructionArray } from "../instruction";
const logger = LogUtil.getLogger('string-processor');

export class StringProcessor extends BaseProcessor implements Processor {
    process(input: string, command: string, param: string | InstructionArray[]): unknown {
        logger.trace('> process');
        let output;
        switch (command) {
            case 'to-lower-case':
                output = input.toLowerCase();
                break;
            case 'to-upper-case':
                output = input.toUpperCase();
                break;
            case 'split':
                output = input.split(param as string);
                break;
            case 'prepend':
                output = param + input;
                break;
            case 'append':
                output = input + param;
                break;
            case 'regex':
                output = input.match(new RegExp(param as string));
                break;
            case 'concat':
                output = this.concatenate(input, param as InstructionArray[]);
                break;
            case 'static':
                output = param;
                break;
            default:
                logger.error('unrecognized command', command);
                output = null;
        }
        logger.trace('< process');
        return output;
    }

    concatenate(input: unknown, arrayOfInstructionsArrays: InstructionArray[]): string {
        const executionResults = arrayOfInstructionsArrays.map((instructionsArray) => {
            return ProcessorManager.get().executeInstructionArray(input, instructionsArray);
        });
        return executionResults.join('');
    }
}
