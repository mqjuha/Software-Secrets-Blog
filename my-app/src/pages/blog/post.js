import { Typography } from "@mui/material";

export default function Post({title, abstract, nav, content, summary, references}){

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