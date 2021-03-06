import yaml from "js-yaml";
import {PIPELINE_SCEHMA} from "./yamlTypes/pipeline";
import {JOB_SCHEMA} from "./yamlTypes/jobs";

export class YamlService {

    constructor() {
        this.pipeline = {};
    }

    toYaml = () => {
        try {
            console.log("Pipeline to convert: ", JSON.parse(JSON.stringify(this.pipeline)));
            return Object.keys(this.pipeline).length !== 0 ?
                yaml.safeDump(this.pipeline, {
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
        if (this.pipeline.resources && Array.isArray(this.pipeline.resources)) {
            this.pipeline.resources.push(data);
        } else {
            this.pipeline.resources = [data]
        }
        return this.pipeline;
    }

    createJob(data) {
        if (this.pipeline.jobs && Array.isArray(this.pipeline.jobs)) {
            this.pipeline.jobs.push(data);
        } else {
            this.pipeline.jobs = [data]
        }
        return this.pipeline;
    }

    clearPipeline() {
        this.pipeline = {};
    }

    static test(data) {
        return yaml.safeDump(data, {
            schema: JOB_SCHEMA,
            noRefs: true
        });
    }
}