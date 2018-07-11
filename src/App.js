import React, {Component} from 'react';
import './App.css';
import Main from "./components/Main";
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from "react-router";
import {YamlService} from "./services/YamlService";
import { AppBar, Typography } from '@material-ui/core';

const styles = {
    root: {
      width: '100%',
    }
  };

class App extends Component {

    constructor(props) {
        super(props);
        this.yamlGen = new YamlService();
    }
    render() {

        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar className="App-header" color='primary' position='static'>
                    <div className="title">
                        <img src="/images/logo-white.svg" className="App-logo" alt="logo"/>
                        <Typography variant="display4">Concourse Boarding Pass</Typography>
                    </div>
                    <Typography variant="subheading" gutterBottom>Concourse CI Pipeline Generator</Typography>
                </AppBar>
                <Main yamlService={this.yamlGen} />
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(App));
