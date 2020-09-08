import React, { Fragment } from 'react';
import './contact.css';


const Contact = () => {
    return (
        <Fragment>
            <div className="contact-border">
                <div className="contact-me">
                    Contact me
                </div>
                <div className="contact">
                    <span className="email-me">Email:</span>
                    <a className="email" href="mailto: gheezl25@gmail.com">gheezl25@gmail.com</a>
                    <span className="phone" >Phone:</span>
                    <span className="phone-number">567-213-9337</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact;