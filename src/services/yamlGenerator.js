import yaml from 'write-yaml'

export class YamlService {
    static toYaml(jsonData) {
        yaml('pipeline.yml', jsonData, (err) => {
            console.log('error with generating yaml ', err);
        });
    }
}