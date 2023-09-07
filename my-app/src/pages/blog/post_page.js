import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './post_page.css'
import Keyword from "../../components/keyword/keyword";


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
                <Typography variant="h3">{postInfo.title}</Typography>
                <Typography>12.4.2023</Typography>
                <div className="keywords">
                    <Keyword word="AVAINSANA"></Keyword>
                    <Keyword word="AVAINSANA"></Keyword>
                    <Keyword word="AVAINSANA"></Keyword>
                    <Keyword word="AVAINSANA"></Keyword>
                </div>
                <Typography>{postInfo.abstract}</Typography>
            </div>
            <div className="nav-element">
                
            </div>
            <div className="content-element">
                
            </div>
            <div className="summary-element">
                <Typography variant="h4">Summary</Typography>
                <Typography>{postInfo.summary}</Typography>
            </div>
            
        </div>
    )
}