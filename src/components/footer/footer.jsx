import React, { Fragment } from "react"
import "./footer.css"

import Github from "../../images/github-logo.png"

const Footer = () => {
    return (
        <Fragment>
            <div className="footer-border" >
                <a className="github" href="https://github.com/gheezl" >
                    <img src={Github} width="50px" />
                </a>
            </div>
        </Fragment>
    )
}

export default Footer;