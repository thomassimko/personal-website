import React, { Component } from 'react';
import FadeIn from "react-lazyload-fadein";


export class LazyImage extends Component {

    render() {
        return <FadeIn height={1000}>
            {onload => (
                <img
                    src={this.props.src}
                    onLoad={onload}
                    style={{width: "100%"}}
                    alt="Thomas Simko in Tuolumne"
                />
            )}
        </FadeIn>
    }
}