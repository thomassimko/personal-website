/// <reference types="react" />
import * as React from 'react';
export interface IResumeSectionProps {
    title: string;
    children: JSX.Element | JSX.Element[];
    id: string;
}
export declare class ResumeSection extends React.Component<IResumeSectionProps, {}> {
    render(): JSX.Element;
}
