import * as React from 'react';
import {eduInstitutions} from "../../models/ResumeInfo";
import {IResumeEducation} from "../../models/i-resume-education";
import {Row} from "../bootstrap/Row";
import {ResumeSection} from "./ResumeSection";

export class EducationPanel extends React.Component<{}, {}> {
    render() {
        return <ResumeSection title='Education'>
            <div className='row'>
                {eduInstitutions.map((institution:IResumeEducation) => this.educationArea(institution))}
            </div>
        </ResumeSection>
    }

    private educationArea(institution:IResumeEducation): JSX.Element {
        return <div key={institution.name}>
            <h4>{institution.name}, {institution.city}, {institution.state}</h4>
            <div style={{marginLeft: '10x'}}>
                {institution.major ? <b>Major: {institution.major}</b> : null}
                <div><b>{institution.startDate} - {institution.endDate}</b></div>
                <div><b>GPA: </b>{institution.gpa}</div>
                {institution.courses
                    ? <div>
                        <b>Relevant Courses:</b>
                        <Row>
                            <ul>
                                {institution.courses.map((course: string) =>
                                    <li className='col-md-6' key={`${institution.name}-${course}`} style={{paddingLeft: '10px'}}>
                                        {course}
                                    </li>)
                                }
                            </ul>
                        </Row>
                    </div>
                    : null
                }
            </div>
        </div>
    }
}