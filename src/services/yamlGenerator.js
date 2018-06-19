import yaml from 'yamljs'

export class YamlService {
    static toYaml(jsonData) {
        return yaml.stringify(jsonData);
    }
}