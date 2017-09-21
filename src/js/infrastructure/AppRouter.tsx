import * as React from 'react';
import {Route, HashRouter} from "react-router-dom";
import {App} from "../react-components/App";
import {Navigation} from "./Navigation";
import {Resume} from "../react-components/Resume/ResumeRoot";
import {NotFound} from "../react-components/NotFound";
import {Switch} from "react-router";

export class AppRouter extends React.Component<{}, {}> {

    get root() {
        return <div>
            <Navigation/>
            <App/>
        </div>
    }

    get resume() {
        return <Resume/>
    }

    get notFound() {
        return <NotFound/>
    }

    render() {
        return <HashRouter>
            <Switch>
                <Route exact path="/" component={() => this.root}/>
                <Route path="*" component={() => this.notFound}/>
            </Switch>
        </HashRouter>;
    }
}