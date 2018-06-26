import yaml from "js-yaml";
import {PIPELINE_SCEHMA} from "./yamlTypes/pipeline";

export class YamlService {

    constructor() {
        this.jsonData = {};
    }

    toYaml = () => {
        try {
            return Object.keys(this.jsonData).length !== 0 ?
                yaml.safeDump(this.jsonData, {
                    schema: PIPELINE_SCEHMA,
                    noRefs: true
                }) : null;
        } catch (err) {
            console.log("error parsing: ", err);
            return null;
        }
    };

    createResource(data) {
        //TODO: add data validation
        if (this.jsonData.resources && Array.isArray(this.jsonData.resources)) {
            this.jsonData.resources.push(data);
        } else {
            this.jsonData.resources = [data]
        }
        return this.jsonData;
    }
}