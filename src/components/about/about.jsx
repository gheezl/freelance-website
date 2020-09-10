import React, { Fragment } from 'react';
import './about.css';

import Me from "../../images/me2.jpg"

const About = () => {
    return (
        <Fragment>
            <div className="about-border" >
                <span className="title" >About me</span>
                <div className="description-image">
                    <img className="image" src={Me} />
                    <span className="description">Hi! My name is Jacob Rushlow I am a freelance web developer and web designer currently living in northwestern Ohio.</span>
                </div>
            </div>
        </Fragment>
    )
}

export default About;