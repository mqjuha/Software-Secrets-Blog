import { Fragment } from "react";
import ReactLogo from './../../logo.svg';

import './end_bar.css'


function Contact_info ({ className = '' })  {
    return (
        <div className={`contact-row ${className}`}>
            <Fragment>
                <img src={ReactLogo} className="image" />
                <div className="contact-info">
                    <h3 className="abstract-header">Nimi Sukunimi</h3>
                    <a>LinkedIn profile</a>
                </div>

            </Fragment>
        </div>
    );
}

export default function Endbar () {
    return (
        <Fragment>
            <div className="section">
                <Contact_info/>
                <Contact_info/>
            </div>
        </Fragment>


    );
}
