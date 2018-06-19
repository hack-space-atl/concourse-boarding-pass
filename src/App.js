import React, {Component} from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import {DownloadComponent} from "./downloadComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="title">
                        <img src="/images/logo-white.svg" className="App-logo" alt="logo"/>
                        <h1 className="App-title">Concourse Boarding Pass</h1>
                    </div>
                    <div>Concourse CI Pipeline Generator</div>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Link to='/download'/>
                <Route path='/download' component={DownloadComponent}/>
            </div>
        );
    }
}

export default App;
