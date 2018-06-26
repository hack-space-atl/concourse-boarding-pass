import {YamlService} from "../services/YamlService";

describe("yaml generator test", () => {

    let yaml;

    beforeEach(() => {
        yaml = new YamlService();
    });

    it("should correctly handle null json input", async () => {
        const yamlData = yaml.toYaml();
        expect(yamlData).toBeNull();
    });
});
