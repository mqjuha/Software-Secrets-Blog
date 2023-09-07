import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import ReactLogo from './../../logo.svg';

import './post.css'

export default function Post({_id, title, cover, abstract, nav, content, summary, references}){

    console.log(title);
    return (
        <div className="post">
            <NavLink to={`/blog/${_id}`} className="link">
                <div className="image">
                    <img className="img" src={ReactLogo}/>
                </div>
                <div className="text">
                    <Typography>{title}</Typography>
                    <Typography>{abstract}</Typography>
                </div>
            </NavLink>
        </div>
    )
}