import {YamlService} from "../services/YamlService";
import fs from 'fs';

describe("yaml generator test", () => {


    it("should correctly handle null json input", async () => {
        const yaml = new YamlService();
        const yamlData = yaml.toYaml();
        expect(yamlData).toBeNull();
    });

    it("should correctly parse 1 resource json object", async () => {
        let yaml = new YamlService();
        const data = {
            name: 'boarding-pass',
            type: 'git',
            source: {
                uri: "https://github.com/hack-space-atl/concourse-boarding-pass.git",
                branch: 'master'
            }
        };
        let jsonData = yaml.createResource(data);
        const moreData = {
            name: 'um whatName',
            type: 'some type',
            source: {
                uri: "google.com",
                branch: 'develop'
            }
        };
        jsonData = yaml.createResource(moreData);
        console.log(JSON.stringify(jsonData));
        const parsed = await yaml.toYaml();

        let expectedYaml = fs.readFileSync('./src/__tests__/yamlTestFiles/oneResource.yaml', 'utf8');
        console.log("expectedYaml ", expectedYaml);
        expect(parsed).toEqual(expectedYaml);
    });
});