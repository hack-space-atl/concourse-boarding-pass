import {YamlService} from "../services/yamlGenerator";

describe("yaml generator test", () => {

    let yaml = null;

    beforeEach(() => {
        yaml = new YamlService();
    });

    it("should correctly handle null json input", async () => {
        const yamlData = yaml.toYaml();
        expect(yamlData).toBeNull()
    });
});