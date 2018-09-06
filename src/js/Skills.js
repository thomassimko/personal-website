import React, { Component } from 'react';
import {Row, Col, Image, Grid} from 'react-bootstrap';
import {skillList} from "../data/SkillData";
import ScrollAnimation from 'react-animate-on-scroll';


export class Skills extends Component {

    render() {
        return (
            <Grid fluid>
                <Row style={{marginTop: '50px', textAlign: "center", marginBottom: "50px"}}>
                    <h2>Skills</h2>
                    <div style={{marginTop: '50px'}}>
                        {this.mapSkills()}
                    </div>
                </Row>
            </Grid>
        );
    }

    mapSkills() {
        return skillList.map(skill => {
            return <Col key={skill.name} sm={6} md={3} style={{textAlign: "center"}}>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                    <Image src={skill.imageSrc} style={{height: '100px', width:'100px', display: "block", margin: "auto"}} responsive/>
                    <div style={{marginTop: "20px", fontSize: "20pt"}}>
                        {skill.name}
                    </div>
                </ScrollAnimation>
            </Col>
        })
    }
}
