import React, {Component} from 'react';
import {YamlService} from "../services/yamlGenerator";
import fileDownload from 'react-file-download';
import {Link} from "react-router-dom";

export class DownloadComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: 'default'
        };
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
            <div className="downloadComponent">
                <button onClick={this.handleClick}>Download</button>
                <div>
                    {this.state.data}
                </div>
                <Link to='jobs'>Jobs</Link>
            </div>
        )
    };
}