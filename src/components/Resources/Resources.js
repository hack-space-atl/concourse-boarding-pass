import React, {Component} from "react";
import './Resources.css';
import update from 'immutability-helper';
import {DropdownButton, MenuItem} from "react-bootstrap";

class Resources extends Component {


    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            numResources: 1
        };

        this.techArray = [
            {
                name: "java",
                value: "0"
            },
            {
                name: "angular",
                value: "1"
            }
        ];

        this.taskArray = [
            {
                name: "unit-test",
                value: "0"
            },
            {
                name: "e2e-test",
                value: "1"
            }
        ];

        this.pipeline_template = {
            'java': {
                resources: {
                  source: {
                      uri: "resource-uri"
                  }
                },
                jobs: [{
                    name: "java",
                }]
            },
            'angular': {
                resources: {

                    name: '{name-of-resource}',
                    type: 'git',
                    source: {
                        uri: "resource-url",
                        branch: 'resource-branch'
                    }
                },
                jobs: [
                    {
                        name: "angular-unit-test",
                        public: true,
                        plan: [
                            {
                                get: "{name-of-resource}"
                            },
                            {
                                task: "unit-test",
                                command: "npm run test"
                            }
                        ]
                    }
                ]
            },
            'java-unit-test': {
                resources: {

                    name: '{name-of-resource}',
                    type: 'git',
                    source: {
                        uri: "resource-url",
                        branch: 'resource-branch'
                    }
                },
                jobs: [
                    {
                        name: "java-unit-test",
                        public: true,
                        plan: [
                            {
                                get: "{name-of-resource}"
                            },
                            {
                                task: "unit-test",
                                command: "./gradlew clean build"
                            }
                        ]
                    }
                ]
            },
        };

        this.inputChange = this.inputChange.bind(this);
        this.frameworkSelect = this.frameworkSelect.bind(this);
    }

    frameworkSelect = (key) => {
        const item = key.item;
        const id = key.id;

        console.log(`state.jobs: `, this.state.jobs);

        let resourceTemplate = this.pipeline_template[item.name];
        resourceTemplate.resources.source.uri = this.state.jobs[id].uri;
        resourceTemplate.resources.source.branch = this.state.jobs[id].branch;



        console.log(`template: ${resourceTemplate}`)
    };

    inputChange(e) {
        let id = e.target.id;
        console.log(`target.id = `, id);

        let job = this.state.jobs[id] || {};

        if (e.target.className === "repoText") {
            job.uri = e.target.value
        }
        if (e.target.className === "branchText") {
            job.branch = e.target.value
        }

        const newResources = update(this.state.jobs, {
            [id]: {$set: job}
        });

        this.setState({
            jobs: newResources
        });

        console.log(this.state.jobs);
    }

    render() {
        let jobItems = [];
        for (let i = 0; i < this.state.numResources; i++) {
            jobItems.push(
                <div className={`job`} key={i}>
                    <h4>{`Job ${i + 1}`}</h4>
                    <div className="block">
                        <div className="text-label">Repo URL</div>
                        <input className="repoText" id={i} type="text"
                               placeholder="Repo URL" onChange={this.inputChange}>
                        </input>
                    </div>

                    <div className="block">
                        <div className="text-label">Which branch?</div>
                        <input className="branchText" id={i} type="text"
                               placeholder="Branch" onChange={this.inputChange}>
                        </input>
                    </div>

                    <div className="block">
                        <DropdownButton id="dropdown-type"
                                        key={i}
                                        className="frameworkDropdown"
                                        title="Choose a tech stack">
                            {this.techArray.map((item, index) =>
                                <MenuItem key={index} eventKey={{item: item, id: i}}
                                          onSelect={this.frameworkSelect}>{item.name}</MenuItem>)}
                        </DropdownButton>
                    </div>

                    <div className="block">
                        <DropdownButton id="dropdown-type"
                                        key={i}
                                        className="taskDropdown"
                                        title="Choose a Task">
                            {this.taskArray.map((item, index) =>
                                <MenuItem key={index} eventKey={{item: item, id: i}}
                                          onSelect={this.frameworkSelect}>{item.name}</MenuItem>)}
                        </DropdownButton>
                    </div>
                </div>
            )
        }

        return (
            <div className="jobs">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                      crossOrigin="anonymous">
                </link>

                <div className="section">
                    <div className="section-header">Jobs</div>
                    <div className="">Placeholder text</div>
                </div>


                <div className="resourceSection">
                    <div className="block">
                        <div className="text-label">Repo URL</div>
                        <input className="resourceName" id={i} type="text"
                               placeholder="Repo URL" onChange={this.inputChange}>
                        </input>
                    </div>
                <div/>

                <div className="jobSection">
                    {jobItems}
                </div>

                <br/>
                <button onClick={() => {
                    this.setState({numResources: this.state.numResources + 1});
                }}>Add Resource
                </button>
            </div>
        );
    }
}

export default Resources;