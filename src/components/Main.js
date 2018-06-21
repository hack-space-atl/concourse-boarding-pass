import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import {DownloadComponent} from "./downloadComponent";
import {JobsComponent} from "./Jobs/Jobs";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path='/download' component={DownloadComponent}/>
                <Route path='/jobs' component={JobsComponent} />
            </Switch>
            <Link to='/download'>Downloads</Link>
        </main>
    )
};

export default Main;
