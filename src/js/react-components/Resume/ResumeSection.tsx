import * as React from 'react';
import {Row} from "../bootstrap/Row";

export interface IResumeSectionProps {
    title: string,
    children: JSX.Element | JSX.Element[],
    id: string
}

export class ResumeSection extends React.Component<IResumeSectionProps, {}> {

    render() {
        return <div id={this.props.id}>
            <h2 className='text-center'><u>{this.props.title}</u></h2>
            <Row>
                <div className='col-md-offset-2 col-md-8'>
                    {this.props.children}
                </div>
            </Row>
        </div>
    }

}