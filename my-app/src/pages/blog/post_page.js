import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './post_page.css'
import Keyword from "../../components/keyword/keyword";
import BlogNavbar from "../../components/blog_nav_bar/blog_nav_bar";


export default function PostPage(){
    const [postInfo, setPostInfo] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        
        fetch(`http://localhost:3001/blog/${id}`)
        .then(response => {
            response.json().then(info => {
                setPostInfo(info);
            });
        });
    }, []);

    if (postInfo.length == 0) return '';

    return (
        <div>
        <BlogNavbar></BlogNavbar>
        <div className="article">
            <div className="intro-element">
                <Typography variant="h3">{postInfo.title}</Typography>
                <Typography>{postInfo.date.substr(0,10)}</Typography>
                <div className="keywords">
                    {postInfo.keywords.map( word => (
                        <Keyword word={word}/>
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
        </div>
    )
}