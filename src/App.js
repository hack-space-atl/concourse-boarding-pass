import React, {Component} from 'react';
import './App.css';
import Main from "./components/Main";

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
                <Main />
            </div>
        );
    }
}

export default App;
