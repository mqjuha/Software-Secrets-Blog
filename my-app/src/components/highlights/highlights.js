import { Fragment } from "react";
import ReactLogo from './../../logo.svg';

import './highlights.css'


function Abstract ({ className = '' })  {
    return (
        <div className={`abstract ${className}`}>
            <Fragment>
            <img src={ReactLogo} className="image" />
                <h3 className="abstract-header">Otsikko</h3>
                <p className="font">
                    Lorem ipsum dolor sit amet, blandit ante, 
                    amet ac lectus pulvinar integer sit, et feugiat, 
                    eleifend ut ligula libero leo quam, nunc litora nunc. 
                    Fusce egestas justo mauris velit. 
                </p>
            </Fragment>
        </div>
    );
}

export default function Highlights () {
    return (
        <div className="section">
            <h2 className="light-header">Highlights</h2>
            <div className="abstract-row">                   
                <Abstract className="red-theme"/>
                <Abstract className="blue-theme"/>
                <Abstract className="yellow-theme"/>
            </div>
        </div>

    );
}
