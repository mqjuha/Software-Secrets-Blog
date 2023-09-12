import * as React from 'react';

import Blogfilter from '../components/blog_filter/blog_filter';
import BlogNavbar from '../components/blog_nav_bar/blog_nav_bar';

import References from '../components/references/references.js';
import TableComparison from '../components/navigation/table_comparison.js';
import TimelineHorizontal from '../components/navigation/timeline_horizontal.js';
import TimelineVertical from '../components/navigation/timeline_vertical.js';
import blog_banner from '../images/blog_banner.jpg'
import { useEffect, useState } from "react";

let x = true;
let y = true;

function FrontPage() {

  setTimeout(() => {
    document.getElementById('banner_image').src = blog_banner;
    document.getElementById("banner-header").innerHTML = '';
  }, 60);

  /*const [timelineVer, setTimelineVer] = useState(null);
  useEffect(() => {

    console.log("X=", x);

    if (x) {

      fetch('http://localhost:3001/blog', {method: "GET"}).then
      (response => {
          console.log(response);
          response.json().then( verLine => {
            console.log(verLine);
            setTimelineVer(verLine);
          });
      });

      //x = false;

      return () => {setTimelineVer(null)}
    }
  }, []);

  console.log(timelineVer); */

  /*const [timelineHor, setTimelineHor] = useState(null);
  useEffect(() => {

    console.log("Y=", y);

    if (y) {

      fetch('http://localhost:3001/blog', {method: "GET"}).then
      (response => {
          console.log(response);
          response.json().then( horLine => {
            console.log(horLine);
            setTimelineHor(horLine);
          });
      });

      //y = false;

      return () => {setTimelineHor(null)}
    }
  }, []);

  console.log(timelineHor);*/

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      }}>
      <p>Front Page of Blog</p>
      
      <References></References>
    </div>
  );
}
  
export default FrontPage;

//<TimelineVertical timeline={timelineVer}></TimelineVertical>
//<TimelineHorizontal timeline={timelineHor}></TimelineHorizontal>