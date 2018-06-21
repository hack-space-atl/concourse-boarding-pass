import {YamlService} from "../services/yamlGenerator";
import {expect} from 'chai';


describe("yaml generator test", () => {
    it("should correctly handle null json input", async() => {
        const yaml = YamlService.toYaml(null);
        console.log(yaml);
        expect(yaml).to.be.null;
    });

    it("should correctly handle undefined json input", async () => {
        const yaml = YamlService.toYaml(undefined);
        expect(yaml).to.be.null;
    })
});