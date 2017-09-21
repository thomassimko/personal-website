import * as React from 'react';
import {Resume} from "./Resume/ResumeRoot";
import {Contact} from "./Contact/Contact";

export class App extends React.Component<{}, {}> {
    render() {
        return <div>
            <div id="intro-photo">
                <div style={{marginTop: '200px'}}>
                    <div style={{fontSize: '10vw'}}>
                        Thomas Simko
                        <hr/>
                    </div>
                    <div style={{fontSize: '5vw'}}>
                        Software Engineer
                    </div>
                </div>
            </div>
            <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
                <Resume/>
                <Contact/>
            </div>
        </div>
    }
}