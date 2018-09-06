import React, { Component } from 'react';
import {Grid, Row, Image, Col} from 'react-bootstrap';

export class Contact extends Component {

    imageStyle = {
        width: "50px",
        height: "50px",
        cursor: "pointer"
    };

    render() {
        return (
            <Grid fluid id="contact" style={{height: '240px', backgroundColor: '#23A1A9', marginTop: '150px'}}>
                <Row style={{textAlign: "center", paddingTop: "100px", paddingLeft: "50px", paddingRight: "50px"}}>
                    <Col smOffset={3} sm={6}>
                        <Row>
                            <Col xs={4} style={{display: "block", margins: "auto", textAlign:"right"}}>
                                <a href="https://github.com/thomassimko" target="_blank" rel="noopener noreferrer">
                                    <Image src="assets/GithubIcon-white.png" style={this.imageStyle}/>
                                </a>
                            </Col>
                            <Col xs={4} style={{display: "block", margins: "auto", textAlign:"center"}}>
                                <a href="https://www.linkedin.com/in/thomas-simko-0b2491b6/" target="_blank" rel="noopener noreferrer">
                                    <Image src="assets/linkedInIcon-white.png" style={this.imageStyle}/>
                                </a>
                            </Col>
                            <Col xs={4} style={{display: "block", margins: "auto", textAlign:"left"}}>
                                <a href="assets/Thomas_Simko_Resume.pdf" download>
                                    <Image src="assets/downloadResume-white.png" style={this.imageStyle}/>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
