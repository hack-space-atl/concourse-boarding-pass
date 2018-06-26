import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Jobs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="jobs">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
                </link>
                <div className="section-header">Jobs</div>
                    <div>Let's start our with 3 default jobs,but feel free to add or remove any!</div>
                <div>
                    <p>1. Building Source Code</p>
                    <p>Remove Job</p>
                </div>
                <p>Actions:</p>

                <a class='dropdown-trigger btn' href='#' data-target='dropdown1'>Actions</a>
                <ul id='dropdown1' class='dropdown-content'>
                    <li><a href="#!">one</a></li>
                    <li><a href="#!">two</a></li>
                    <li class="divider" tabindex="-1"></li>
                    <li><a href="#!">three</a></li>
                    <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
                </ul>
                <p>Choose an</p>
                <p>+ Add Action</p>
                <div>
                    <p>2. Run Unit Test X Remove</p>
                    <p>Actions: Choose an action</p>
                    <p>+ Add Action</p>
                </div>
                <div>
                    <p>Deploy  x Remove</p>
                    <p>Actions: Choose an action</p>
                    <p>+ Add Action</p>
                </div>
                <Link to='/'>Add Job</Link>

>>>>>>> dropdown
            </div>
        )
    }
}
