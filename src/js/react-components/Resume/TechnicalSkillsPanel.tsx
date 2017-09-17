import * as React from 'react';
import {technicalSkills} from "../../models/ResumeInfo";
import {Row} from "../bootstrap/Row";
import {ITechnicalSkill} from "../../models/i-technical-skill";
import {ResumeSection} from "./ResumeSection";

export class TechnicalSkillsPanel extends React.Component<{}, {}> {
    render():JSX.Element {
        return <ResumeSection title='Technical Skills' id='technical-skills'>
            <ul>
                {technicalSkills.map((skill:ITechnicalSkill) => this.technicalSkillItem(skill))}
            </ul>
        </ResumeSection>
    }

    private technicalSkillItem(skill:ITechnicalSkill): JSX.Element {
        const stars:JSX.Element[] = [];
        for(var i = 0; i < 5; i++) {
            stars.push(<span key={`${skill.skill}-${i}`}>
                <i className={`fa ${i < skill.rating ? 'fa-star' : 'fa-star-o'}`}/>
                &nbsp;
            </span>);
        }
        return <li key={skill.skill} className='col-md-6'>
            {skill.skill}
            <span className='pull-right' style={{marginRight: '40px'}}>
                {stars}
            </span>
        </li>
    }
}