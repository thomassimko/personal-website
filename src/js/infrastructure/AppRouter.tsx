import * as React from 'react';
import {Route, Switch} from "react-router";
import {App} from "../react-components/App";
import {Navigation} from "./Navigation";
import {Resume} from "../react-components/Resume/ResumeRoot";
import {NotFound} from "../react-components/NotFound";

export class AppRouter extends React.Component<{}, {}> {

    get root() {
        return <App/>
    }

    get resume() {
        return <Resume/>
    }

    get notFound() {
        return <NotFound/>
    }

    render() {
        return <div style={{backgroundColor: '#f9fbfd', minHeight: '100vh'}}>
            <Navigation/>
            <div style={{paddingTop: '70px'}}>
                <Switch>
                    <Route exact path='/' component={() => this.root}/>
                    <Route path='/resume' component={() => this.resume}  />
                    <Route component={() => this.notFound}/>
                </Switch>
            </div>
        </div>
    }
}