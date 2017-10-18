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
                                <li><ScrollLink to="education" linkName="Education"/></li>
                                <li><ScrollLink to="technicalSkills" linkName="Technical Skills"/></li>
                                <li><ScrollLink to="workExperience" linkName="Work Experience"/></li>
                                <li><ScrollLink to="softwareProjects" linkName="Software Projects"/></li>
                                <li><ScrollLink to="achievements" linkName="Achievements"/></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a className='scroll' href="#contact">Contact Me&nbsp;&nbsp;<span className="glyphicon glyphicon-arrow-right"/></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}
