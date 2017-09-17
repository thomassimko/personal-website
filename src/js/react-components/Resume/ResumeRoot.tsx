import * as React from 'react';
import {EducationPanel} from "./EducationPanel";
import {TechnicalSkillsPanel} from "./TechnicalSkillsPanel";
import {WorkExperiencePanel} from "./WorkExperiencePanel";
import {SoftwareProjectsPanel} from "./SoftwareProjectsPanel";
import {ResumeSection} from "./ResumeSection";
import {eduAchievements} from "../../models/ResumeInfo";

export class Resume extends React.Component<{}, {}> {

    render() {
        return <div id='resume'>
            <EducationPanel/>
            <TechnicalSkillsPanel/>
            <WorkExperiencePanel/>
            <SoftwareProjectsPanel/>
            <ResumeSection title='Achievements' id='achievements'>
                <ul>
                    {eduAchievements.map((achievement:string) => <li key={achievement}>{achievement}</li>)}
                </ul>
            </ResumeSection>
        </div>
    }

}