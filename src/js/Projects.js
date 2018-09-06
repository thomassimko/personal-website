import React, { Component } from 'react';
import {Carousel, Row, Col, Image, Grid} from 'react-bootstrap';
import {projectList} from "../data/ProjectData";
import "../css/Projects.css";

export class Projects extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Carousel style={{backgroundColor: '#2573BB'}}>
                        {this.mapProjectsToCarousel()}
                    </Carousel>
                </Row>
            </Grid>
        );
    }

    mapProjectsToCarousel() {
        return projectList.map(project => {
            return <Carousel.Item key={project.title} style={{marginTop: "100px", paddingBottom:'70px'}}>
                <Row className="show-grid">
                    <Col xsOffset={2} xs={8} mdOffset={2} md={3} style={{height:'300px'}}>
                        <Image src={project.imageSrc} className="project-image"/>
                    </Col>
                    <Col xsOffset={1} xs={10} md={5}>
                        <div style={{marginLeft: '20px', color: 'white', height: '360px'}}>
                            <h3>{project.title}</h3>
                            <h5>{project.technologies.join(", ")}</h5>
                            <p style={{marginTop: '40px'}}>{project.description}</p>
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
        })
    }
}
