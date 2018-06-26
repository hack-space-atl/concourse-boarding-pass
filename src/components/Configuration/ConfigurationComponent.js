import React, {Component} from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {YamlService} from "../../services/yamlGenerator";
import Resources from "../Resources/Resources";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import './ConfigurationComponent.css';

class ConfigurationComponent extends Component {

    constructor(props) {
        super(props);
        this.yamlGen = new YamlService();
        this.state = {
            generatedYaml: `// Code`
        }
    }

    handleClick = () => {
        const data = {
            name: 'boarding-pass',
            type: 'git',
            source: {
                uri: "https://github.com/hack-space-atl/concourse-boarding-pass.git",
                branch: 'master'
            }
        };
        let jsonData = this.yamlGen.createResource(data);
        const moreData = {
            name: 'um whatName',
            type: 'some type',
            source: {
                uri: "google.com",
                branch: 'develop'
            }
        };
        jsonData = this.yamlGen.createResource(moreData);
        console.log(jsonData);
        const parsed = this.yamlGen.toYaml();
        this.setState({
            generatedYaml: parsed
        });
        // const blob = new Blob([parsed], {type: 'text/plain;charset=utf-8'});
        // saveAs(blob, 'pipeline.yml');
    };


    render() {
        console.log("rendering with state: ", this.state);
        return (
            <div className="configuration">
                <h2 className="title">Configuration</h2>
                <div className="container">
                    <Resources/>
                    <div className="codeViewer">
                            <SyntaxHighlighter language='yaml'
                                               style={docco.default}
                                               showLineNumbers={true}
                                               customStyle={{display: 'block'}}
                                               wrapLines={true}>{this.state.generatedYaml}</SyntaxHighlighter>
                            <div>
                                <button onClick={this.handleClick}>Download</button>
                            </div>
                    </div>
                </div>

                <Link to='/'>Back</Link>
            </div>
        )
    }
}

export default withRouter(ConfigurationComponent)