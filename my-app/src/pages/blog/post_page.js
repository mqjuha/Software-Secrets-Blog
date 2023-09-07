import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function PostPage(){
    const [postInfo, setPostInfo] = useState([]);
    const {id} = useParams();
    console.log("post page");

    useEffect(() => {
        fetch(`http://localhost:3001/blog/${id}`)
        .then(response => {
            console.log(response);
            response.json().then(info => {
                setPostInfo(info);
                console.log("postInfo");
            });
        });
    }, []);

    if (!postInfo) return '';

    return (
        <div className="article">
            <div className="intro-element">
                <Typography>{postInfo.title}</Typography>
                <Typography>{postInfo.abstract}</Typography>
            </div>
            <div className="nav-element">
                
            </div>
            <div className="content-element">
                
            </div>
            <div className="summary-element">
                <Typography>{postInfo.summary}</Typography>
            </div>
            
        </div>
    )
}