import * as React from 'react';

export class Navigation extends React.Component<{}, {}> {
    render() {
        return <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Thomas Simko</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Home</a></li>
                        {/*<li className="dropdown">*/}
                            {/*<a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>*/}
                            {/*<ul className="dropdown-menu">*/}
                                {/*<li><a href="#/resume">Resume</a></li>*/}
                                {/*<li><a href="#">Page 1-2</a></li>*/}
                                {/*<li><a href="#">Page 1-3</a></li>*/}
                            {/*</ul>*/}
                        {/*</li>*/}
                        <li><a href="#/resume">Resume</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#/contact">Contact Me&nbsp;&nbsp;<span className="glyphicon glyphicon-arrow-right"/></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
}
