import React, { Fragment, useState } from "react"
import { withRouter } from "react-router-dom"
import "./title.css"


const Title = ({ history }) => {
    let [aboutClass, setAboutClass] = useState("border")


    const onCLickFunction = (props) => {
        history.push(`./${props}`)
    }

    const data = ["about me", "my work", "contact me"]

    return (
        <Fragment>
            <div className="title-border" >
                <span className="name" >Jacob Rushlow</span>
                <span className="developer-designer" >A Web Developer and Designer</span>
            </div>
            <div className="to-information">
                {/* {
                    data.map(string => (
                        <div onClick={() => onCLickFunction("about")} className="border">
                            <span>{string}</span>
                        </div>
                    ))
                } */}
                <div onClick={() => onCLickFunction("about")} className="border">
                    <span>About me</span>
                </div>
                <div onClick={() => onCLickFunction("")} className="border">
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