import React, {Component} from "react";
import '../../styles/Resources.css';
import {DropdownButton, MenuItem} from "react-bootstrap";

class Resources extends Component {
    render() {
        return (
            <div className="resources">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                </link>

                <div>
                    <div className="section-header">Resources!</div>
                    <div className="">This will help us know how to set up your file...blah blah blah</div>
                </div>

                <div className="block">
                    <div className="text-label">What framework are you using?</div>
                    <DropdownButton
                        title="Choose a tech stack"
                        id="dropdown-basic-1">
                        <MenuItem eventKey="1">Framework 1</MenuItem>
                        <MenuItem eventKey="2">Framework 2</MenuItem>
                        <MenuItem eventKey="3">Framework 3</MenuItem>
                        <MenuItem eventKey="5">Framework 4</MenuItem>
                        <MenuItem eventKey="6">Framework 5</MenuItem>
                        <MenuItem eventKey="7">Framework 6</MenuItem>
                        <MenuItem eventKey="8">Framework 7</MenuItem>
                        <MenuItem eventKey="9">Framework 8</MenuItem>
                    </DropdownButton>
                </div>

                <div className="block">
                    <div className="text-label">Where is your repo location?</div>
                    <DropdownButton
                        title="Paste repo link">
                    </DropdownButton>
                </div>

                <div>Test</div>

            </div>
        );
    }
}

export default Resources;
