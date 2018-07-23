import * as React from 'react';
import {Link} from "react-scroll";
import {ScrollLink} from "./ScrollLink";
import Scroll from "react-scroll";

export class Navigation extends React.Component<{}, {}> {
    render() {
        return <nav className="navbar navbar-default navbar-fixed-top" style={{marginBottom: '100px'}}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="/#/" onClick={() => Scroll.animateScroll.scrollToTop()}>Thomas Simko</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="/#/">Resume<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><ScrollLink to="education" linkName={<span>Education</span>}/></li>
                                <li><ScrollLink to="technicalSkills" linkName={<span>Technical Skills</span>}/></li>
                                <li><ScrollLink to="workExperience" linkName={<span>Work Experience</span>}/></li>
                                <li><ScrollLink to="softwareProjects" linkName={<span>Software Projects</span>}/></li>
                                <li><ScrollLink to="achievements" linkName={<span>Achievements</span>}/></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><ScrollLink to="contactMe" linkName={<span>Contact Me&nbsp;&nbsp;<span className="glyphicon glyphicon-arrow-right"/></span>}/></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}
