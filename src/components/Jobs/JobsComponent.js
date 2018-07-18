import React, {Component} from 'react';
import {Link} from "react-router-dom";


export class JobsComponent extends Component {


    constructor(props) {
        super(props);
        this.yamlGen = this.props.yamlService;
        const unitTestJob = {
            name: 'unit-tests',
            plan: [
                {
                    get: '{{name-of-git-repo}}',
                    trigger: true
                },
                {
                    task: 'run-unit-tests',
                    config: {
                        platform: 'linux',
                        image_resource: {
                            type: 'docker-image',
                            source: { repository: 'java', tag: 'openjdk-8-alpine' }
                        },
                        inputs: [
                            {
                                name: '{{name-of-git-repo}}'
                            }
                        ],
                        outputs: [
                            {
                                name: 'build-output'
                            }
                        ],
                        run: {
                            path: '{{name-of-git-repo}}/{{location-of-build-script}}'
                        }
                    }
                }
            ]
        };

        this.yamlGen.createJob(unitTestJob);

        const deployJob = {
            name: 'deploy',
            plan: [
                {
                    task: 'deploy',
                    config: {
                        platform: 'linux',
                        image_resource: {
                            type: 'docker-image',
                            source: { repository: 'java', tag: 'openjdk-8-alpine' }
                        },
                        inputs: [
                            {
                                name: '{{name-of-git-repo}}'
                            }
                        ],
                        outputs: [
                            {
                                name: 'build-output'
                            }
                        ],
                        run: {
                            path: '{{name-of-git-repo}}/{{location-of-build-script}}'
                        }
                    }
                }
            ]
        };

        this.yamlGen.createJob(deployJob);

        this.state = {
            jobs: [unitTestJob, deployJob]
        }
    }

    render() {
        let resourceItems = [];

        for(let i = 0; i < this.state.jobs.length; i++) {
            const job = this.state.jobs[i];
            resourceItems.push(
                <div className="job" key={i}>
                    <h4>{job.name}</h4>
                </div>
            )
        }

        return (
            <div className="resources">
                    <div className="section">
                        <div className="section-header">Jobs</div>
                        <div className="">This will help us know how to set up your file...blah blah blah</div>
                    </div>

                    <div className="jobs">
                        {resourceItems}
                    </div>
            </div>
        )
    }
}