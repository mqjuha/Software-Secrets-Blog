import * as React from 'react';

import Blogfilter from '../components/blog_filter/blog_filter';
import BlogNavbar from '../components/blog_nav_bar/blog_nav_bar';

import References from '../components/references/references.js';
import TableComparison from '../components/navigation/table_comparison.js';
import TimelineHorizontal from '../components/navigation/timeline_horizontal.js';
import TimelineVertical from '../components/navigation/timeline_vertical.js';
import blog_banner from '../images/blog_banner.jpg'
import { useEffect, useState } from "react";

function FrontPage() {

  setTimeout(() => {
    document.getElementById('banner_image').src = blog_banner;
    document.getElementById("banner-header").innerHTML = '';
  }, 60);

  const [timelinesVer, setTimelinesVer] = useState([]);
  useEffect(() => {
    let x = true;

    if (x) {

      fetch('http://localhost:3001/blog', {method: "GET"}).then(response => {
          response.json().then( verLines => {
            //console.log(verLines);
            setTimelinesVer(verLines);
          });
      });
    }
    return () => {setTimelinesVer([])}

  }, []);

  console.log(timelinesVer);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      }}>
      <BlogNavbar></BlogNavbar>
      <p>Front Page of Blog</p>
      <TimelineVertical timelines={timelinesVer}></TimelineVertical>
      <TimelineHorizontal></TimelineHorizontal>
      <TableComparison></TableComparison>
      <References></References>    
    </div>
  );
}
  
export default FrontPage;