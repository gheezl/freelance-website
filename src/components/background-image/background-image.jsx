import React, { Fragment } from 'react';
import './background-image.css';

import Clouds from "../../images/clouds6.jpg"


const BackgroundImage = () => {
    return (
        <Fragment>
            <img className="background-image" src={Clouds} />
        </Fragment>
    )
}

export default BackgroundImage;