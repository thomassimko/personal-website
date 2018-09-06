import React, { Component } from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import {aboutData} from "../data/AboutData";
import {LazyImage} from "./LazyImage";



export class About extends Component {

    render() {
        return (
            <Grid fluid style={{paddingLeft: '0px'}}>
                <Row id="about" style={{marginTop: '70px'}}>
                    <Col md={6}>
                        <LazyImage src={aboutData.imageSrc}/>
                        {/*<Img*/}
                            {/*src={aboutData.imageSrc}*/}
                            {/*responsive*/}
                            {/*loader={<ImageLoader/>}*/}
                            {/*style={{width:"100%"}}*/}
                        {/*/>*/}
                    </Col>
                    <Col md={5} style={{margin: "20px", marginTop: "100px"}}>
                        <h2>{aboutData.intro}</h2>
                        <div style={{marginTop: "70px"}}>
                            <h6>ABOUT ME</h6>
                        </div>
                        <div style={{marginTop: "40px"}}>
                            <p>{aboutData.paragraph}</p>
                            <ol>
                                {aboutData.listItems.map(item => <li key={item}>{item}</li>)}
                            </ol>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
