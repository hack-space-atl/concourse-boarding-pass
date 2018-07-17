import React, {Component} from "react";
import './Resources.css';
import {DropdownButton, MenuItem} from "react-bootstrap";

class Resources extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resources: []
        }
    }

    addResource() {

    }

    render() {
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
                    <div className="block">
                        <div className="text-label">Repo URL</div>
                        <input className="repoText" type="text"
                               placeholder="Repo URL">
                        </input>
                    </div>

                    <div className="block">
                        <div className="text-label">Which branch?</div>
                        <input className="branchText" type="text"
                               placeholder="Branch">
                        </input>
                    </div>
                </div>

                <br/>
                <button onClick={this.addResource()}>Add Resource</button>
                <br/>
                <br/>
                <div className="advanced-options">Advanced Options</div>
            </div>
        );
    }
}

export default Resources;
