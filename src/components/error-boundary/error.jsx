import React, { Fragment } from "react"

import "./error.css"


const ErrorDisplay = () => {
    return (
        <Fragment>
            <h1 className="ERROR">ERROR</h1>
            <span className="something-wrong">Something is wrong, please come back later</span>
        </Fragment>
    )
}

export default ErrorDisplay;