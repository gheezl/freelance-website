import React, { Fragment } from 'react';
import './background-image.css';

import Clouds from "../../images/clouds3.jpg"


const BackgroundImage = () => {
    return (
        <Fragment>
            <img className="background-image" src={Clouds} width="2000px" />
        </Fragment>
    )
}

export default BackgroundImage;