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

import {StringProcessor} from "./string";
import {JsonProcessor} from "./json";
import {ArrayProcessor} from "./array";
import {Processor} from "./base-processor";
import {JsonpathProcessor} from "./jsonpath";
import LogUtil from "../../utils/log-util";
import {InstructionArray} from "../instruction";

const logger = LogUtil.getLogger('processor-manager');

export default class ProcessorManager {
    private static processorManager: ProcessorManager;
    private processors: { [key: string]: Processor } = {};

    private constructor() {
        this.processors['json'] = new JsonProcessor();
        this.processors['jsonpath'] = new JsonpathProcessor();
        this.processors['array'] = new ArrayProcessor();
        this.processors['string'] = new StringProcessor();
    }

    public static get(): ProcessorManager {
        logger.trace('> get');
        if (!this.processorManager) {
            this.processorManager = new ProcessorManager();
        }
        logger.trace('< get');
        return this.processorManager;
    }

    public executeInstructionArray(input: unknown, instructionArray: InstructionArray): unknown {
        logger.trace('> executeInstructionArray');
        let output = null;
        let nextInput = input;
        for (const instruction of instructionArray) {
            output = this.executeInstruction(nextInput, instruction);
            nextInput = output;
        }
        logger.trace('< executeInstructionArray');
        return output;
    }

    private executeInstruction(input, instruction) {
        logger.trace('> executeInstruction');
        const processorName = instruction.processor;
        const processor = this.processors[processorName];

        if (!processor) {
            logger.error(`processor ${processorName} not supported`);
            return null;
        }
        const command = instruction.command;
        const param = instruction.param;
        const output = processor.process(input, command, param);
        logger.trace('< executeInstruction');
        return output;
    }
}

