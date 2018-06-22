import React, { Component } from 'react';
import {withRouter} from "react-router";
import {Link} from "react-router-dom";


class InstallComponent extends Component {
    render() {
        return (
            <div className="install">
                <p>In the install page!</p>
                <Link to='/'>Back</Link>
            </div>
        )
    }
}

export default withRouter(InstallComponent)