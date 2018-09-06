import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import "../css/NavBar.css";
import {scroller} from "react-scroll";

export class NavBar extends Component {


    scrollTo(location) {
        scroller.scrollTo(location,
        {
            duration: 1000,
            delay: 50,
            smooth: "easeInOutQuint",
            offset: -50,
        });
    }

    get getLineClassname() {
        switch(this.props.selected) {
            case 2:
                return "second-hr";
            case 3:
                return "third-hr";
            default:
                return "first-hr";
        }
    }

    render() {
        return <Navbar fixedTop collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    {/*<div className={`brand-trans ${this.props.atTop ? "brand-trans-top" : "brand-trans-scrolled"}`}>*/}
                        {/*<h1 className="no-top-margin-h1">Thomas Simko</h1>*/}
                    <a className="navbar-brand brand-trans" onClick={() => this.scrollTo("top")}>Thomas Simko</a>
                    {/*</div>*/}
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem className="first-item" eventKey={1} active={this.props.selected === 1} onClick={() => this.scrollTo("work")}>
                        Work
                    </NavItem>
                    <NavItem className="second-item" eventKey={2} active={this.props.selected === 2} onClick={() => this.scrollTo("about")}>
                        About
                    </NavItem>
                    <NavItem className="third-item" eventKey={3} active={this.props.selected === 3} onClick={() => this.scrollTo("contact")}>
                        Contact
                    </NavItem>
                    <hr className={`desktop-only ${this.getLineClassname}`}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}