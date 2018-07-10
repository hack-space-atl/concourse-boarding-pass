import React, {Component} from 'react';
import './App.css';
import Main from "./components/Main";
import {withRouter} from "react-router";
import {YamlService} from "./services/YamlService";

class App extends Component {

    constructor(props) {
        super(props);
        this.yamlGen = new YamlService();
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="title">
                        <img src="/images/logo-white.svg" className="App-logo" alt="logo"/>
                        <h1 className="App-title">Concourse Boarding Pass</h1>
                    </div>
                    <div className="App-intro">Concourse CI Pipeline Generator</div>
                </header>
                <Main yamlService={this.yamlGen} />
            </div>
        );
    }
}

export default withRouter(App);
