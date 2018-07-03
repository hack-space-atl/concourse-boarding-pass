import React, {Component} from "react";
import './Resources.css';
import {DropdownButton, MenuItem} from "react-bootstrap";

class Resources extends Component {

    techArray = [
        {
            name: "Java",
            value: "0"
        },
        {
            name: "Javascript",
            value: "1"
        }
    ];

    render() {
        return (
            <div className="resources">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                      crossOrigin="anonymous">
                </link>

                <div className="section">
                    <div className="section-header">Resources!</div>
                    <div className="">This will help us know how to set up your file...blah blah blah</div>
                </div>

                <div className="block">
                    <div className="text-label">Name</div>
                    <input id="name"
                           className="blockText" type="text"
                           placeholder="add a resource name">
                    </input>
                </div>

                <div className="block">
                    <div className="text-label">Type</div>
                    <input id="type"
                           className="blockText" type="text"
                           placeholder="add a resource type">
                    </input>
                </div>

                <div className="block">
                    <div className="text-label">Name</div>
                    <DropdownButton id="dropdown-type"
                                    className="dropdown"
                                    title="Choose a tech stack">
                        {this.techArray.map(item =>
                            <MenuItem eventKey={item.value}>{item.name}</MenuItem>)}
                    </DropdownButton>
                </div>



                <div className="final-text">That is all we need for basic pipelines. But if you need a more advanced
                    setup, check out our Advanced Options.
                </div>

                <div className="advanced-options">Advanced Options</div>

            </div>
        );
    }
}

export default Resources;
