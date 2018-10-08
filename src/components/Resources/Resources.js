import React, {Component} from "react";
import './Resources.css';
import update from 'immutability-helper';
import {Button, Container, Input, Select} from "semantic-ui-react";

class Resources extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            resources: [],
            numResources: 1,
            numJobs: 1
        };

        this.resourceTypes = this.createMenuItemCollection(
            'git', 'sh', 'hg', 'time', 's3', 'archive', 'semver', 'github-release', 'docker-image', 'tracker',
            'pool', 'cf', 'bosh-io-release', 'bosh-io-stemcell');

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
        this.resourceTypeSelect = this.resourceTypeSelect.bind(this);
    }

    createMenuItemCollection = (...names) => {
        let data = [];
        for (let i = 0; i < names.length; i++) {
            data.push({
                key: i,
                value: i,
                text: names[i],
            });
        }

        return data;
    };

    frameworkSelect = (key) => {
        const item = key.item;
        const id = key.id;

        let resourceTemplate = this.pipeline_template[item.name];
        resourceTemplate.resources.source.uri = this.state.jobs[id].uri;
        resourceTemplate.resources.source.branch = this.state.jobs[id].branch;

        // const newResources = update(this.state.jobs, {
        //     [id]: {$set: job}
        // });
        //
        // this.setState({
        //     jobs: newResources
        // });

        console.log(`template: ${resourceTemplate}`)
    };

    resourceTypeSelect = (key) => {
        const item = key.item;
        const id = key.id;

        let resource = this.state.resources[id] || {};
        resource.name = item.name;

        const newResources = update(this.state.resources, {
            [id]: {$set: resource}
        });

        this.setState({
            resources: newResources
        });
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
        let resourceItems = [];
        for (let i = 0; i < this.state.numResources; i++) {
            resourceItems.push(
                <div className="resource card" key={i}>
                    <h4>{`Resource ${i + 1}`}</h4>

                    <div className="block">
                        <div className="text-label">Name:</div>

                        <Input type="text" id={`resourceName${i}`}
                               placeholder="resource-name" onChange={this.inputChange}/>

                    </div>

                    <div className="block">
                        <div className="text-label">Type:</div>

                        <Select id={`resourceType${i}`} options={this.resourceTypes}
                                placeholder='Choose a Type...'/>

                    </div>

                    {/*TODO generated properties based on type*/}


                    <div className="block">
                        <div className="text-label">Repo URL</div>
                        <Input type="text" id={`jobUrl${i}`} className="url" placeholder="Repo URL"
                               defaultValue='https://github.com/' onChange={this.inputChange} />
                    </div>

                </div>
            )
        }

        let jobItems = [];
        for (let i = 0; i < this.state.numJobs; i++) {
            jobItems.push(
                <div className="job card" key={i}>
                    <h4>{`Job ${i + 1}`}</h4>

                    <div className="block">
                        <div className="text-label">Name:</div>
                        <Input id={`jobName${i}`}
                               placeholder="resource-name" onChange={this.inputChange}>
                        </Input>
                    </div>

                    <div className="block">
                        <div className="text-label">Type:</div>
                        <Select id={`jobAssignedResource${i}`}
                                options={this.resources} placeholder='Choose a Resource...'/>
                    </div>

                </div>
            )
        }

        return (
            <div className="jobs">
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                      crossOrigin="anonymous">
                </link>

                <div className="section">
                    <div className="banner">
                        <div className="section-header">Resources</div>
                        <div className="">Create your resources here.</div>

                        <div className="resourceSection">
                            {resourceItems}
                        </div>

                        <br/>

                        <Button className="addResource" onClick={() => {
                            this.setState({numResources: this.state.numResources + 1});
                        }}>Add Resource
                        </Button>
                    </div>
                </div>

                <div className="section">
                    <div className="banner">
                        <div className="section-header">Jobs</div>
                        <div className="">Create your jobs here.</div>

                        <div className="jobSection">
                            {jobItems}
                        </div>

                        <br/>

                        <Button onClick={() => {
                            this.setState({numJobs: this.state.numJobs + 1});
                        }}>Add Job
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resources;