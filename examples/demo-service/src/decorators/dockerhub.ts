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
import {Decorator, BaseDecorator, CsnfEvent} from 'onug-csnf';
import axios from "axios";

const logger = log4js.getLogger('dockerhub-decorator');
logger.level = process.env.LOG_LEVEL || 'info';

const DOCKERHUB_API_ROOT = 'https://hub.docker.com/v2/repositories';

export default class DockerhubDecorator extends BaseDecorator implements Decorator {
    constructor() {
        super('dockerhub');
    }

    async decorate(csnfEvent: CsnfEvent) {
        logger.trace('> getEventDecoration');

        if (!csnfEvent ||
            !csnfEvent.resources ||
            csnfEvent.resources.length === 0 ||
            !csnfEvent.resources[0].package) {

            logger.trace('< getEventDecoration');
            return null;
        }

        const containerImage = csnfEvent.resources[0].package;
        const containerImageComponents = containerImage.split('/');

        if (containerImageComponents.length === 1) {
            containerImageComponents.unshift('library');
            containerImageComponents.unshift('docker.io');
        }
        const [registry, namespace, imageWithTagName] = containerImageComponents;

        if (registry !== 'docker.io' || namespace !== 'library') {
            return null;
        }

        const [imageName, imageTag] = imageWithTagName.split(':');

        const [imageInfo, tagInfo] = await this.getImageInfo(namespace, imageName, imageTag)

        const decoration = {
            registry: registry,
            namespace: imageInfo.namespace,
            image: imageInfo.name,
            tag: imageTag,
            digests: tagInfo.images.map((image) => image.digest),
            imageLastUpdated: imageInfo.last_updated,
            tagLastUpdated: tagInfo.last_updated,
            description: imageInfo.description,
            starCount: imageInfo.star_count,
            pullCount: imageInfo.pull_count,
        };


        logger.trace('< getEventDecoration');
        return decoration;
    }

    async getImageInfo(imageNamespace: string, imageName: string, imageTag: string) {
        logger.trace('< getImageInfo');

        const imageInfoReqUrl = `${DOCKERHUB_API_ROOT}/${imageNamespace}/${imageName}/`;
        logger.debug(`getting image ${imageName} info from ${imageInfoReqUrl}`);
        const imageInfo = (await axios.get(imageInfoReqUrl)).data;

        const tagInfoReqUrl = `${imageInfoReqUrl}tags/${imageTag}/`;
        logger.debug(`getting tag ${imageTag} info from ${tagInfoReqUrl}`);
        const tagInfo = (await axios.get(tagInfoReqUrl)).data;

        logger.trace('> getImageInfo');

        return [imageInfo, tagInfo];
    }
}

