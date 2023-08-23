import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Post({_id, title, cover, abstract}){

    return (
        <div className="post">
            <NavLink to={`/post/${_id}`}>
                <div className="image">
                    <img />
                </div>
                <div className="text">
                    <Typography>{title}</Typography>
                    <Typography>{abstract}</Typography>
                </div>
            </NavLink>
        </div>
    )
}