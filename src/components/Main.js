import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import QuestionComponent from "./Question/Question";
import InstallComponent from "./Installation/Install";
import ConfigurationComponent from "./Configuration/ConfigurationComponent";
import {withRouter} from "react-router";

const Main = (mainProps) => {
    return (
        <main>
            <div className='navi'>
                <Switch>
                    <Route exact path='/' component={QuestionComponent}/>
                    <Route path='/install' component={InstallComponent}/>
                    <Route path='/configure' render={(props) => <ConfigurationComponent yamlService={mainProps.yamlService} />}/>
                    <Redirect to="/" />
                </Switch>
            </div>
        </main>
    )
};

export default withRouter(Main);
