import React, { Component } from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";

import './Install.css';

class InstallComponent extends Component {
    render() {
        return (
            <div className="install">
                <p>Need help installing Concourse? You've come to the right place!</p>
                <a className="package-download-link" onClick={() => window.open("https://concourse-ci.org/setup-and-operations.html")} href="#">Download package to install</a>
                <span>Helpful tips:</span>
                <ul className="dashed">
                    <li>Make sure you have Fly installed</li>
                    <li>Other helpful things</li>
                    <li>Other helpful things</li>
                </ul>

                <Link className="installed-concourse" to='/configure'>I have now installed Concourse</Link>
            </div>
        )
    }
}

export default withRouter(InstallComponent)