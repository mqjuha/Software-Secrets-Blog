import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './post_page.css'
import Keyword from "../../components/keyword/keyword";


export default function PostPage(){
    const [postInfo, setPostInfo] = useState([]);
    const {id} = useParams();
    console.log(postInfo);

    useEffect(() => {
        
        fetch(`http://localhost:3001/blog/${id}`)
        .then(response => {
            console.log(response);
            response.json().then(info => {
                setPostInfo(info);
            });
        });
    }, []);

    if (postInfo.length == 0) return '';

    return (
        <div className="article">
            <div className="intro-element">
                <Typography variant="h3">{postInfo.title}</Typography>
                <Typography>{postInfo.date}</Typography>
                <div className="keywords">
                    {postInfo.keywords.map( word => (
                        <Keyword></Keyword>
                    ))}
                </div>
                <Typography>{postInfo.abstract}</Typography>
            </div>
            <div className="nav-element">
                
            </div>
            <div className="content-element">
                {postInfo.content.map( chapter => (
                    <Typography>{chapter}</Typography>
                ))}
            </div>
            <div className="summary-element">
                <Typography variant="h4">Summary</Typography>
                <Typography>{postInfo.summary}</Typography>
            </div>
            
        </div>
    )
}