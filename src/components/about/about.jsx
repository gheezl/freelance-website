import React, { Fragment } from 'react';
import './about.css';

import Me from "../../images/me.jpg"

const About = () => {
    return (
        <Fragment>
            <div>
                <div>
                    <img src={Me} height="350px" />
                    <span></span>
                </div>
            </div>
        </Fragment>
    )
}

export default About;