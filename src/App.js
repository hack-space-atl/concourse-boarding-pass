import React, {Component} from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import {DownloadComponent} from "./components/downloadComponent";
import Resources from "./components/Resources/Resources";

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
                    Cool beans. Complete the steps below to help us create a pipeline.yml download specific for you.
                </p>

                <Link to='/download'/>
                <Route path='/download' component={DownloadComponent}/>

                <div className="sections">
                    <div className="section-left"><Resources/></div>
                    <div className="section-mid"><Resources/></div>
                    <div className="section-right"><Resources/></div>
                </div>
            </div>
        );
    }
}

export default App;
