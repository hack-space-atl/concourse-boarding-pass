import {YamlService} from "../services/yamlGenerator";
import fs from 'fs';

describe("yaml generator test", () => {

    let yaml = null;

    beforeEach(() => {
        yaml = new YamlService();
    });

    it("should correctly handle null json input", async () => {
        const yamlData = yaml.toYaml();
        expect(yamlData).toBeNull()
    });

    it("should correctly parse 1 resource json object", async () => {
        const data = {
            name: 'boarding-pass',
            type: 'git',
            source: {
                uri: "https://github.com/hack-space-atl/concourse-boarding-pass.git",
                branch: 'master'
            }
        };


        const parsed = yaml.parseResource(data);
        console.log("parsed ", parsed);

        let expectedYaml = fs.readFileSync('./yamlTestFiles/oneResource.yaml', 'utf8');
        console.log("expectedYaml ", expectedYaml);
        expect(parsed).toEqual(expectedYaml);
    });
});