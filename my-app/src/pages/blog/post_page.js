import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './post_page.css'
import Keyword from "../../components/keyword/keyword";

import References from '../../components/references/references.js';

import TableComparison from '../../components/navigation/table_comparison';
import TimelineHorizontal from '../../components/navigation/timeline_horizontal.js';
import TimelineVertical from '../../components/navigation/timeline_vertical.js';

export default function PostPage(){
    const [postInfo, setPostInfo] = useState([]);
    const [selectedNavComponent, setSelectedNavComponent] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/blog/${id}`)
          .then(response => {
            response.json().then(info => {
              setPostInfo(info);
              //setSelectedNavComponent(info.nav.element);
      
              if (info.nav.nav_type === 'TimelineHor') {
                // Haetaan TimelineHor-dokumentti dots-arvoineen
                fetch(`http://localhost:3001/timelineHor/${info.nav.element}`)
                  .then(response => response.json())
                  .then(timelineHor => {
                    setSelectedNavComponent(<TimelineHorizontal timeline={timelineHor} />);
                  })
                  .catch(error => {
                    console.error('Virhe haettaessa TimelineHor-dokumenttia:', error);
                  });
              } else if (info.nav.nav_type === 'TimelineVer') {
                setSelectedNavComponent(<TimelineVertical />);
              }
            });
          });
      }, []);

    if (postInfo.length == 0) return '';


    return (
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

            {selectedNavComponent && (
                <div className="navigation-element">
                {selectedNavComponent}
                </div>
            )}

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