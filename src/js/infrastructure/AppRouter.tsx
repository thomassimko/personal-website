import * as React from 'react';
import {Route, HashRouter} from "react-router-dom";
import {App} from "../react-components/App";
import {Navigation} from "./Navigation";
import {Resume} from "../react-components/Resume/ResumeRoot";
import {NotFound} from "../react-components/NotFound";
import {Switch} from "react-router";
import {Projects} from "../react-components/Projects/projects";
import {INavigator} from "./Navigator";

export interface IAppRouter {
    navigator: INavigator
}

export class AppRouter extends React.Component<IAppRouter, {}> {

    get app() {
        return <App/>
    }

    get notFound() {
        return <NotFound/>
    }

    get projects() {
        return <Projects/>
    }



    render() {
        return <div>
            <Navigation/>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={() => this.app}/>
                    <Route path="*" component={() => this.notFound}/>
                </Switch>
            </HashRouter>
        </div>;
    }
}