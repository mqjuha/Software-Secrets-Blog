import * as React from 'react';
import { useEffect, useState } from "react";

import Blogfilter from '../components/blog_filter/blog_filter';
import BlogNavbar from '../components/blog_nav_bar/blog_nav_bar';
import Post from '../components/post/post';
import Postlist from '../components/postList/postList';

import './blog_page.css'

import References from '../components/references/references.js';
import TableComparison from '../components/navigation/table_comparison.js';
import TimelineHorizontal from '../components/navigation/timeline_horizontal.js';
import TimelineVertical from '../components/navigation/timeline_vertical.js';

import blog_banner from '../images/blog_banner.jpg'

function FrontPage() {

  console.log("front page");

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let x = true;

    if (x) {

    console.log('fetch');
      fetch('http://localhost:3001/blog', {method: "GET"}).then(response => {
        console.log(response);
          response.json().then(postArr => {
              setPosts(postArr);
          });
      });
    }
    return () => {setPosts([])}

  }, []);

  setTimeout(() => {
    document.getElementById('banner_image').src = blog_banner;
    document.getElementById("banner-header").innerHTML = '';
  }, 60);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      }}>
      <BlogNavbar></BlogNavbar>

      <p>Front Page of Blog</p> 
      <div className="list">
        {posts.length > 0 && posts.map( post => (
            <Post {...post} />
        ))}

      </div>
    </div>
  );
}
  
export default FrontPage;