import React, { Component } from 'react';
import {Link} from "react-router-dom";


export class JobsComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="jobs">
                <p>Jobs</p>
                <p>Let's start out with 3 default jobs,</p>
                <p>but feel free to add or remove any!</p>
                <Link to='/'>Back</Link>
            </div>
        )
    }
}