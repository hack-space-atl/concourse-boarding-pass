import React, { Component } from "react";
import './Resources.css';
import update from 'immutability-helper';
import { Button, Form, Input, Label, Select } from "semantic-ui-react";

class Resources extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: [{name: '', plan: []}],
            resources: [{name: '', type: ''}],
            resourceNames: []
        };

        this.resourceTypes = [
            'git', 'hg', 'time', 's3', 'archive', 'semver', 'github-release', 'docker-image', 'tracker',
            'pool', 'cf', 'bosh-io-release', 'bosh-io-stemcell'];

        this.jobSteps = [
            'Get', 'Put', 'Task', 'Aggregate', 'Do', 'Try', 'On Success', 'On Failure', 'On Abort', 'Ensure',
            'Tags', 'Timeout', 'Attempts'];

        this.resourceTypesSelectItems = this.createMenuItemCollection(this.resourceTypes);
        this.jobStepSelectItems = this.createMenuItemCollection(this.jobSteps);


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

        this.resourceSelect = this.resourceSelect.bind(this);
        this.resourceInputChange = this.resourceInputChange.bind(this);
        this.jobInputChange = this.jobInputChange.bind(this);
        this.addResource = this.addResource.bind(this);
        this.addJob = this.addJob.bind(this);
        this.addStep = this.addStep.bind(this);
        this.removeResource = this.removeResource.bind(this);
        this.removeJob = this.removeJob.bind(this);

        this.frameworkSelect = this.frameworkSelect.bind(this);
    }

    createMenuItemCollection = (names) => {
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

        console.log(`template: ${resourceTemplate}`)
    };

    resourceInputChange(e) {
        let id = e.target.id;
        let resource = this.state.resources[id] || {};

        if (e.target.className.includes("resourceName")) {
            resource.name = e.target.value;
        }

        const newResources = update(this.state.resources, {
            [id]: {$set: resource}
        });

        this.setState({
            resources: newResources
        });

        this.updateResourceList();

        console.log('Update ====> ', this.state.resources[id]);
    }

    jobInputChange(e) {
        let id = e.target.id;
        let job = this.state.jobs[id] || {};

        if (e.target.className.includes("jobName")) {
            job.name = e.target.value;
        }

        const newJobs = update(this.state.jobs, {
            [id]: {$set: job}
        });

        this.setState({
            jobs: newJobs
        });

        console.log('Update ====> ', this.state.jobs[id]);
    }

    updateResourceList() {
        let names = [];
        this.state.resources.filter(resource => resource.name !== '').forEach((resource) => {
            names.push(resource.name)
        });

        this.setState({
            resourceNames: this.createMenuItemCollection(names)
        });
    }

    resourceSelect(e, data) {
        let id = data.id;
        let resource = this.state.resources[id] || {};

        console.log('id => ', id);
        console.log('className => ', e.target.className);
        console.log('resource => ', resource);
        console.log('data => ', data);

        resource.type = data.options[data.value].text;

        const newResources = update(this.state.resources, {
            [id]: {$set: resource}
        });

        this.setState({
            resources: newResources
        });

        console.log('resource => ', this.state.resources[id]);
    }

    addStep(e, data) {
        let id = data.id;
        let job = this.state.jobs[id];

        let step = data.options[data.value].text;

        job.plan.push({
            name: [step.toLowerCase()]
        });

        const newJobs = update(this.state.jobs, {
            [id]: {$set: job}
        });

        this.setState({
            jobs: newJobs
        });

        console.log('job => ', this.state.jobs[id]);
    }

    addResource() {
        let resource = {name: '', type: ''};
        let resources = this.state.resources;

        resources.push(resource);

        this.setState({
            resources: resources
        });
    }

    addJob() {
        let job = {name: '', plan: []};
        let jobs = this.state.jobs;

        jobs.push(job);

        this.setState({
            jobs: jobs
        });
    }

    removeResource(index) {
        let resources = this.state.resources;

        resources.splice(index, 1);

        this.setState({
            resources: resources
        });

        this.updateResourceList();
    }

    removeJob(index) {
        let jobs = this.state.jobs;

        jobs.splice(index, 1);

        this.setState({
            jobs: jobs
        });

        this.updateResourceList();
    }

    renderJobPlan(index) {
        let stepItems = [];
        for (let i = 0; i < this.state.jobs[index].plan.length; i++) {
            let step = this.state.jobs[index].plan[i];
            stepItems.push(
                <div className='jobStep' key={i}>
                    <h4>{`${step.name} Step`}</h4>
                    <Form.Group>
                        <Form.Field className='step' label={'w'}>
                        </Form.Field>
                    </Form.Group>
                </div>
            );
        }

        return stepItems;
    }

    render() {
        let resourceItems = [];
        for (let i = 0; i < this.state.resources.length; i++) {
            resourceItems.push(
                <div className="resource card" key={i}>
                    <h4>{`Resource ${i + 1}`}</h4>

                    <Form size='huge'>

                        <Form.Group>
                            <Form.Field required>
                                <label>Name</label>
                                <input className='resourceName' id={i} placeholder='resource-name'
                                       value={this.state.resources[i].name} onChange={this.resourceInputChange}/>
                            </Form.Field>

                            <Form.Field required>
                                <label>Type</label>
                                <Form.Select className="resourceType" id={i} placeholder='Choose a Type...'
                                             options={this.resourceTypesSelectItems} onChange={this.resourceSelect}/>
                            </Form.Field>

                        </Form.Group>
                    </Form>

                    {/*TODO generated properties based on type*/}

                    <div className="delete-button block">
                        <Button id={i} className="removeResource" onClick={() => {
                            this.removeResource(i)
                        }}>Delete
                        </Button>
                    </div>
                </div>
            )
        }

        let jobItems = [];
        for (let i = 0; i < this.state.jobs.length; i++) {
            jobItems.push(
                <div className="job card" key={i}>
                    <h4>{`Job ${i + 1}`}</h4>

                    <Form size='huge'>

                        <Form.Group>
                            <Form.Field>
                                <label>Name</label>
                                <input className='jobName' id={i} placeholder='job-name'
                                       value={this.state.jobs[i].name} onChange={this.jobInputChange}/>
                            </Form.Field>

                            <Form.Field inline>
                                <label>Steps</label>
                                <Form.Select className="jobSteps" id={i} placeholder='Add one or more Steps...'
                                             options={this.jobStepSelectItems} onChange={this.addStep}/>
                            </Form.Field>
                        </Form.Group>
                    </Form>

                    {this.renderJobPlan(i)}

                    <div className="delete-button block">
                        <Button id={i} className="removeJob" onClick={() => {
                            this.removeJob(i)
                        }}>Delete
                        </Button>
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
                    </div>

                    <br/>

                    <Button className="addResource" onClick={() => {
                        this.addResource()
                    }}>Add Resource
                    </Button>
                </div>

                <div className="section">
                    <div className="banner">
                        <div className="section-header">Jobs</div>
                        <div className="">Create your jobs here.</div>

                        <div className="jobSection">
                            {jobItems}
                        </div>

                        <br/>

                        <Button className="addJob" onClick={() => {
                            this.addJob()
                        }}>Add Job
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resources;