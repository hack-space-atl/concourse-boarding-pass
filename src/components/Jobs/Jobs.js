import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Jobs.css'

import {  DropdownButton, SplitButton, MenuItem} from "react-bootstrap";

export default class Jobs extends Component {
  jobsArray = [
            {
                name: "Java",
                value: "0"
            },
            {
                name: "Javascript",
                value: "1"
            }
        ];
    sourceCodeArray = [
              {
                  name: "github",
                  value: "0"
              },
              {
                  name: "bitbucket",
                  value: "1"
              }
          ];

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
                   <div className="text-label">Actions</div>
                   <DropdownButton id="dropdown-type"
                                   className="dropdown"
                                   title="source code">
                       {this.sourceCodeArray.map(item =>
                           <MenuItem eventKey={item.value}>{item.name}</MenuItem>)}
                   </DropdownButton>
                 </div>
               </div>
               <div>
                 <div className="block">
                     <div>2. Run Unit Test</div>
                     <span className="remove-job">X Remove Job</span>
                 </div>
                  <div className="text-label">Actions</div>
                  <DropdownButton id="dropdown-type"
                                  className="dropdown"
                                  title="remove job">
                      {this.sourceCodeArray.map(item =>
                          <MenuItem eventKey={item.value}>{item.name}</MenuItem>)}
                  </DropdownButton>
              </div>
              <div>
                <div className="block">
                    <div>3. Deploy</div>
                    <span className="remove-job">X Remove Job</span>
                </div>
                 <div className="text-label">Actions</div>
                 <DropdownButton id="dropdown-type"
                                 className="dropdown"
                                 title="deploy">
                     {this.sourceCodeArray.map(item =>
                         <MenuItem eventKey={item.value}>{item.name}</MenuItem>)}
                 </DropdownButton>
             </div>
                <Link to='/' className="add-job">Add Job</Link>
            </div>
        )
    }
}
