import yaml from 'yamljs'

export class YamlService {
    static toYaml(jsonData) {
        return jsonData ? yaml.stringify(jsonData): null;
    }
}