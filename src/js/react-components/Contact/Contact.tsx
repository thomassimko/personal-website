import * as React from 'react';
import {Row} from "../bootstrap/Row";


export class Contact extends React.Component<{}, {}> {

    render() {
        return <div id="contact" style={{textAlign: 'center', marginBottom: '40px'}}>
            <hr/>
            <h2><u>Contact Me:</u></h2>
            <h3>Thomas Simko</h3>
            <h4><a href="mailto:tjsimko@gmail.com" target="_top">tjsimko@gmail.com</a></h4>
            <br/>
            <h5>See other sources with my information:</h5>
            <Row>
                <div className="col-md-offset-4 col-md-2" style={{alignContent: 'center'}}>
                    <div className='media-photo'>
                        <a href='https://www.linkedin.com/in/thomas-simko-0b2491b6/'>
                            <img src="../../../images/github.png"/>
                            <div className="overlay">
                                <div style={{paddingTop: '15px'}}>
                                    <h4>Visit my GitHub</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-2" style={{alignContent: 'center'}}>
                    <div className='media-photo'>
                    <img src="../../../images/linkedin.png"/>
                        <a className='media-photo' href='https://www.linkedin.com/in/thomas-simko-0b2491b6/'>
                            <div className="overlay">
                                <div style={{paddingTop: '15px'}}>
                                    <h4>Visit my LinkedIn Profile</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </Row>
        </div>
    }

}