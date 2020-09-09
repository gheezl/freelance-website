import React, { Component, Fragment } from "react"

import ErrorDisplay from "./error.jsx"


class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false,
        }
    }

    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasErrored: true }
    }


    render() {
        const { hasErrored } = this.state
        const { children } = this.props

        return (
            <Fragment>
                {
                    hasErrored
                        ? (<ErrorDisplay />)
                        : (children)
                }
            </Fragment>
        )
    }
}

export default ErrorBoundary;