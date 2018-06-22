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
                <Link to='/'>Back</Link>
            </div>
        )
    }
}