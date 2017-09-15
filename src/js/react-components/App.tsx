import * as React from 'react';
import {Resume} from "./Resume/ResumeRoot";

export class App extends React.Component<{}, {}> {
    render() {
        return <div>
            <div id="intro-photo">
                <div style={{marginTop: '200px'}}>
                    <div style={{fontSize: '1000%'}}>
                        Thomas Simko
                        <hr/>
                    </div>
                    <div style={{fontSize: '500%'}}>
                        Software Engineer
                    </div>
                </div>
            </div>
            <Resume/>
        </div>
    }
}