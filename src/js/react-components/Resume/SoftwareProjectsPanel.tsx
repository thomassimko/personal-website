import * as React from 'react';
import {softwareProjects} from "../../models/ResumeInfo";
import {ISoftwareProject} from "../../models/i-software-project";
import {ResumeSection} from "./ResumeSection";

export class SoftwareProjectsPanel extends React.Component<{}, {}> {

    render():JSX.Element {
        return <ResumeSection title='Major Software Projects' id='software-projects'>
            {softwareProjects.map((project: ISoftwareProject) => this.projectPanel(project))}
        </ResumeSection>
    }

    private projectPanel(project: ISoftwareProject): JSX.Element {
        return <div key={project.name} className='row'>
            <div className='col-md-4'>
                <h4>{project.name}</h4>
                {project.time}
            </div>
            <div className='col-md-offset-1 col-md-7'>
                <h5>{project.tools.join(', ')}</h5>
                {project.summary}
            </div>
        </div>;
    }

}