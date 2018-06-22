import React from "react";
import {Route, Switch} from "react-router-dom";
import QuestionComponent from "./Question/Question";
import InstallComponent from "./Installation/Install";
import ConfigurationComponent from "./Configuration/ConfigurationComponent";
import {withRouter} from "react-router";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={QuestionComponent} />
                <Route path='/install' component={InstallComponent} />
                <Route path='/configure' component={ConfigurationComponent} />
            </Switch>
        </main>
    )
};

export default withRouter(Main);
