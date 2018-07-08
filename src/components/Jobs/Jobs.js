import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Jobs.css'

import {  SplitButton, MenuItem} from "react-bootstrap";

export default class Jobs extends Component {
    render() {
        return (
            <div className="jobs">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous">
                </link>
                <div className="section-header">Jobs</div>
                <div>Let's start our with 3 default jobs,but feel free to add or remove any!</div>
                <div>
                  <div className="block">
                      <div>1. Building Source Code</div>
                      <span className="remove-job">X Remove Job</span>
                  </div>
                  <p>Actions:</p>
                  <SplitButton title="Choose an Action" pullRight id="split-button-pull-right">
                    <MenuItem eventKey="1">Source1</MenuItem>
                    <MenuItem eventKey="2">Source2</MenuItem>
                    <MenuItem eventKey="3">Source3</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4">Separated link</MenuItem>
                  </SplitButton>
                  <div className="add-action">+ Add Action</div>
                </div>
                <div>
                    <div className="block">
                        <div>2. Run Unit Test</div>
                        <span className="remove-job">X Remove Job</span>
                    </div>
                    <SplitButton title="Choose an Action" pullRight id="split-button-pull-right">
                      <MenuItem eventKey="1">Source1</MenuItem>
                      <MenuItem eventKey="2">Source2</MenuItem>
                      <MenuItem eventKey="3">Source3</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey="4">Separated link</MenuItem>
                    </SplitButton>
                                    <div className="add-action">+ Add Action</div>
                </div>
                <div>
                    <div className="block">
                        <div>3. Deploy  </div>
                        <span className="remove-job">X Remove Job</span>
                    </div>
                    <SplitButton title="Choose an Action" pullRight id="split-button-pull-right">
                      <MenuItem eventKey="1">Source1</MenuItem>
                      <MenuItem eventKey="2">Source2</MenuItem>
                      <MenuItem eventKey="3">Source3</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey="4">Separated link</MenuItem>
                    </SplitButton>
                <div className="add-action">+ Add Action</div>
                </div>
                <Link to='/' className="add-job">Add Job</Link>

>>>>>>> dropdown
            </div>
        )
    }
}
