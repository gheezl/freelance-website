import React, { Fragment, useState } from "react"
import { withRouter } from "react-router-dom"
import "./title.css"


const Title = ({ history }) => {
    const onCLickFunction = (props) => {
        history.push(`./${props}`)
    }

    return (
        <Fragment>
            <div className="title-border" >
                <span className="name" >Jacob Rushlow</span>
                <span className="developer-designer" >A Web Developer and Designer</span>
            </div>
            <div className="to-information">
                <div onClick={() => onCLickFunction("about")} className="border">
                    <span>About me</span>
                </div>
                <div onClick={() => onCLickFunction("work")} className="border">
                    <span>My work</span>
                </div>
                <div onClick={() => onCLickFunction("contact")} className="border" >
                    <span>Contact me</span>
                </div>
            </div>
        </Fragment>
    )
}



export default withRouter(Title);