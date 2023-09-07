import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function PostPage({_id, title, cover, abstract, nav, content, summary, references}){
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/post/${id}`)
        .then(response => {
            response.json(postinfo => {
                setPostInfo(postInfo);
            });
        });
    }, []);

    return (
        <div className="article">
            <div className="intro-element">
                <Typography>{title}</Typography>
                <Typography>{abstract}</Typography>
            </div>
            <div className="nav-element">
                
            </div>
            <div className="content-element">
                
            </div>
            <div className="summary-element">
                <Typography>{summary}</Typography>
            </div>
            
        </div>
    )
}