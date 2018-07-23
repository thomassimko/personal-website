/// <reference types="react" />
import * as React from 'react';
import { INavigator } from "./Navigator";
export interface IAppRouter {
    navigator: INavigator;
}
export declare class AppRouter extends React.Component<IAppRouter, {}> {
    readonly app: JSX.Element;
    readonly notFound: JSX.Element;
    readonly projects: JSX.Element;
    render(): JSX.Element;
}
