import React, { Fragment, useState } from "react"
import "./information.css"


const Information = () => {
    let [toggle, setToggle] = useState("About")

    const onCLickFunction = (props) => {
        setToggle(props)
    }

    return (
        <Fragment>
            <div className="to-information">
                <div onClick={() => onCLickFunction("About")} className="border">
                    <span>About me</span>
                </div>
                <div onClick={() => onCLickFunction("Work")} className="border">
                    <span>My work</span>
                </div>
                <div onClick={() => onCLickFunction("Contact")} className="border" >
                    <span>Contact me</span>
                </div>
            </div>
            {
                toggle === "About"
                    ? (<span>About</span>) : (null)
            }
        </Fragment>
    )
}



export default Information;