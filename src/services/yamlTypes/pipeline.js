import yaml from 'js-yaml';
import {Resource, ResourceYamlType, SourceYamlType} from './resource';
import {StepYamlType} from "./jobs";

export const Pipeline = (resources) => {
    if (resources) {
        if (!resources.every((resource) => { return resource instanceof Resource; })) {
            throw new Error('A non resource inside resources Array');
        }
    }
    this.resources = resources;
};

export const PipelineYamlType = new yaml.Type('!pipeline', {
    kind: 'mapping',
    construct: (data) => {
        console.log("data in PipelineYamlType", data);
        return new Pipeline(data.resources);
    },
    instanceOf: Pipeline
});

export const PIPELINE_SCEHMA = yaml.Schema.create([PipelineYamlType, ResourceYamlType, SourceYamlType, StepYamlType]);