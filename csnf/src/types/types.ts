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

export type Reporter = {
    name: string;
}

export type Producer = {
    name: string;
}

export type Metadata = {
    name: string;
    guid: string;
    url: string;
    shortDescription: string;
    longDescription: string;
    severity: string;
    time: string;
}

export type Resource = {
    accountId: string;
    guid: string;
    name: string;
    type: string;
    service: string;
    region: string;
    package: string;
    platform: string;
}

export type CsnfEvent = {
    reporter: Reporter;
    producer: Producer;
    metadata: Metadata;
    resources: Resource[];
}

export type CsnfDecoration = {
}
export type CsnfDecorationPayload = {
}