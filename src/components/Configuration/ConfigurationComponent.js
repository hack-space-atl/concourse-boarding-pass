import React, { Component } from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import fileDownload from "react-file-download";
import {YamlService} from "../../services/yamlGenerator";

class ConfigurationComponent extends Component {

    constructor(props) {
        super(props);
        this.dummyData = {
            "id": "0001",
            "type": "donut",
            "name": "Cake",
            "ppu": 0.55,
            "batters":
                {
                    "batter":
                        [
                            { "id": "1001", "type": "Regular" },
                            { "id": "1002", "type": "Chocolate" },
                            { "id": "1003", "type": "Blueberry" },
                            { "id": "1004", "type": "Devil's Food" }
                        ]
                },
            "topping":
                [
                    { "id": "5001", "type": "None" },
                    { "id": "5002", "type": "Glazed" },
                    { "id": "5005", "type": "Sugar" },
                    { "id": "5007", "type": "Powdered Sugar" },
                    { "id": "5006", "type": "Chocolate with Sprinkles" },
                    { "id": "5003", "type": "Chocolate" },
                    { "id": "5004", "type": "Maple" }
                ]
        };
    }

    handleClick = () => {
        const yamlData = YamlService.toYaml(this.dummyData);
        console.log("clicked ", yamlData.toString());
        this.setState({
            data: yamlData
        });
        fileDownload(yamlData, 'sample.yml');
    };

    render() {
        return (
            <div className="configuration">
                <p>Configuration</p>
                <div>
                    <button onClick={this.handleClick}>Download</button>
                </div>
                <Link to='/'>Back</Link>
            </div>
        )
    }
}
export default withRouter(ConfigurationComponent)