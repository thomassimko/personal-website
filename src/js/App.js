import React, { Component } from 'react';
import '../css/App.css';
import {Projects} from "./Projects";
import {Skills} from "./Skills";
import {About} from "./About";
import {Contact} from "./Contact";
import {NavBar} from "./NavBar";
import Waypoint from 'react-waypoint';

export class App extends Component {

    constructor() {
        super();
        this.state = {
            selected: 1,
            atTop: true
        }
    }
    render() {
        return <div>
            <NavBar selected={this.state.selected} atTop={this.state.atTop}/>
            <section id="top">
                <Waypoint
                    onEnter={() => this.setState({atTop: true})}
                    onLeave={() => this.setState({atTop: false})}
                />
                <div style={{paddingTop: "100px", marginBottom: "100px", textAlign: "center"}}>
                    <h1>Thomas Simko</h1>
                    <h3>Software Engineer</h3>
                </div>
            </section>
            <section id="work">
                <Waypoint onEnter={() => this.updateNavBarSelection(1)}/>
                <Projects/>
                <Skills/>
            </section>
            <section id="about">
                <Waypoint onEnter={() => this.updateNavBarSelection(2)}/>
                <About/>
            </section>
            <section id="contact">
                <Waypoint onEnter={() => this.updateNavBarSelection(3)}/>
                <Contact/>
            </section>
        </div>
    }


    updateNavBarSelection(region) {
        this.setState({selected: region});
    }
}
