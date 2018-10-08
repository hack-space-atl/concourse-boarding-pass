import React, { Component } from 'react';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Resources from "../Resources/Resources";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import './ConfigurationComponent.css';
import { Button } from "semantic-ui-react";

class ConfigurationComponent extends Component {

    constructor(props) {
        super(props);
        this.yamlGen = this.props.yamlService;
        this.state = {
            generatedYaml: `// Code`,
            pipeline: {}
        };

        this.resourceUpdated = this.resourceUpdated.bind(this);
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
                target: "https://somewebsite.com",
                insecure: "true",
                teams: [
                    {
                        name: "teamName1",
                        username: 'hello',
                        password: 'somepass'
                    },
                    {
                        name: "teamName2",
                        username: 'something',
                        password: 'another pass'
                    }
                ]
            }
        };
        jsonData = this.yamlGen.createResource(moreData);
        const step = {
            name: "some job name",
            public: true,
            plan: [
                {
                    get: "my Repo"
                },
                {
                    task: "hello-world",
                    file: "resource-tutorial/tutorials/basic/task-hello-world/task_hello_world.yml"
                }
            ]
        };
        this.yamlGen.createJob(step);
        const parsed = this.yamlGen.toYaml();
        // const parsed = YamlService.test({plan: [step]});

        this.setState({
            generatedYaml: parsed
        });
    };

    resourceUpdated = () => {
    };


    render() {
        console.log("rendering with state: ", this.state);
        return (
            <div className="configuration">

                <Link className="back-icon-link" to='/'>
                    <svg className="back-icon" height='40px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"
                         enableBackground="new 0 0 26 26">
                        <path d="M 13.5 0 C 6.6 0 1 5.6 1 12.5 C 1 19.4 6.6 25 13.5 25 C 20.4 25 26 19.4 26 12.5 C 26 5.6 20.4 0 13.5 0 z M 13.5 1.8125 C 19.4 1.8125 24.1875 6.6 24.1875 12.5 C 24.1875 18.4 19.4 23.1875 13.5 23.1875 C 7.6 23.1875 2.8125 18.4 2.8125 12.5 C 2.8125 6.6 7.6 1.8125 13.5 1.8125 z M 11.90625 7 L 6.40625 12.5 L 11.90625 18 L 14.6875 18 L 10.6875 14 L 20 14 L 20 11 L 10.6875 11 L 14.6875 7 L 11.90625 7 z"/>
                    </svg>
                    <label>Back</label>
                </Link>

                <h2 className="title">Configuration</h2>

                <div className="sections">

                    <div className="section-left">
                        <Resources yamlService={this.props.yamlGen} resourceUpdated={this.resourceUpdated}/>
                    </div>

                    <div className="section-right">

                        <div className="codeViewer">
                            <SyntaxHighlighter language='yaml'
                                               style={docco.default}
                                               showLineNumbers={true}
                                               customStyle={{display: 'block'}}
                                               wrapLines={true}>{this.state.generatedYaml}</SyntaxHighlighter>
                            <div>
                                <Button onClick={this.handleClick}>Download</Button>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
}

export default withRouter(ConfigurationComponent)
