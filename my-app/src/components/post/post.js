import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import ReactLogo from './../../logo.svg';

import './post.css'

export default function Post({_id, title, cover, abstract}){

    return (
        <div className="post">
            <NavLink to={`/post/${_id}`} className="link">
                <div className="image">
                    <img className="img" src={ReactLogo}/>
                </div>
                <div className="text">
                    <Typography>Article title</Typography>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh purus, porta sit amet ultrices in, aliquet sed libero. Nulla a accumsan turpis. Cras aliquet, nunc sollicitudin bibendum iaculis, arcu ante pellentesque nisl, nec tristique nibh quam eu lorem. Vivamus vel quam a neque molestie pulvinar. Sed nec euismod est. Vestibulum at luctus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper lacus a tortor iaculis fringilla.</Typography>
                </div>
            </NavLink>
        </div>
    )
}