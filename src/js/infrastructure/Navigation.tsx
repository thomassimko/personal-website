import * as React from 'react';

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
                    <a className="navbar-brand scroll" href="#">Thomas Simko</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><a className='scroll' href="#intro-photo">Home</a></li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">Resume<span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a className='scroll' href="#education">Education</a></li>
                                <li><a className='scroll' href="#technical-skills">Technical Skills</a></li>
                                <li><a className='scroll' href="#work-experience">Work Experience</a></li>
                                <li><a className='scroll' href="#software-projects">Software Projects</a></li>
                                <li><a className='scroll' href="#achievements">Achievements</a></li>
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
