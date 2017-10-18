import * as React from 'react';
import {IOccupation} from "../../models/i-occupation";
import {workExperience} from "../../models/ResumeInfo";
import {ResumeSection} from "./ResumeSection";
import {Row} from "../bootstrap/Row";

export class WorkExperiencePanel extends React.Component<{}, {}> {

    render():JSX.Element {
        return <ResumeSection title='Work Experience' id='workExperience'>
            {workExperience.map((occupation: IOccupation) => this.occupationPanel(occupation))}
        </ResumeSection>
    }

    private occupationPanel(occupation: IOccupation): JSX.Element {
        return <div key={`${occupation.company}-${occupation.timePeriod.replace(/ /g, '-')}`}>
            <Row>
                <div className='col-md-4'>
                    <h4>{occupation.company}</h4>
                    {occupation.timePeriod}
                </div>
                <div className='col-md-offset-1 col-md-7'>
                    <h5>{occupation.position}</h5>
                    {occupation.summary}
                    <div style={{marginTop: '10px'}}>
                        Tasks:
                        <ul>
                            {occupation.bullets.map((bullet:string) => <li key={bullet}>{bullet}</li>)}
                        </ul>
                    </div>
                    <div style={{marginTop: '10px', color: '#22A39F'}}>
                        <i className='fa fa-location-arrow'/>&nbsp; {occupation.location}
                        &nbsp;  |  &nbsp;
                        <a href={occupation.website} target="_blank" style={{color: '#22A39F'}}><i className='fa fa-link'/>&nbsp;{occupation.website}</a>
                    </div>
                </div>
            </Row>
        </div>;
    }

}