import React, { Fragment } from 'react';
import './about.css';

import Me from "../../images/me2.jpg"

const About = () => {
    return (
        <Fragment>
            <div className="about-border" >
                <div className="description-image">
                    <img className="image" src={Me} height="350px" />
                    <span className="description">Hi! My name is Jacob Rushlow I am a web developer and designer</span>
                </div>
                <div className="testimonials" >
                    <span>Testimonials</span>
                </div>
            </div>
        </Fragment>
    )
}

export default About;