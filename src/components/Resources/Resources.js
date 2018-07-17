import React, {Component} from "react";
import './Resources.css';
import update from 'immutability-helper';

class Resources extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resources: [],
            numResources: 1
        };

        this.inputChange = this.inputChange.bind(this);
    }

    addResource() {

    }

    inputChange(e) {
        console.log(e.target.value);
        console.log(e.target.id);
        console.log(e.target.className);
        console.log(this.state);

        let resource = this.state.resources[e.target.id] || {};

        if (e.target.className === "repoText") {
            resource.uri = e.target.value
        }
        if (e.target.className === "branchText") {
            resource.branch = e.target.value
        }

        const newResources = update(this.state.resources, {
            [e.target.id]: { $set: resource }
        });

        this.setState({
            resources: newResources
        });
        console.log(this.state.resources);
    }

    render() {
        let resourceItems = [];
        for (let i = 0; i < this.state.numResources; i++) {
            resourceItems.push(
                <div className={`resource`} key={i}>
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
                </div>
            )
        }

        return (
            <div className="resources">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                      crossOrigin="anonymous">
                </link>

                <div className="section">
                    <div className="section-header">Resources</div>
                    <div className="">Placeholder text</div>
                </div>


                <div className="resourceSection">
                    {resourceItems}
                </div>

                <br/>
                <button onClick={() => {
                    this.setState({numResources: this.state.numResources + 1});
                }}>Add Resource
                </button>
                <br/>
                <br/>
                <div className="advanced-options">Advanced Options</div>
            </div>
        );
    }
}

export default Resources;
