import * as React from 'react';
import { useEffect, useState } from "react";

import Blogfilter from "../../components/blog_filter/blog_filter";
import BlogNavbar from "../../components/blog_nav_bar/blog_nav_bar";
import Post from '../../components/post/post';

import './blog_layout.css'

export default function Business() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let x = true;

    if (x) {

    console.log('fetch business');
      fetch('http://localhost:3001/blog/business', {method: "GET"}).then(response => {
        console.log(response);
          response.json().then(postArr => {
              setPosts(postArr);
          });
      });
    }
    return () => {setPosts([])}

  }, []);

  if ( posts.length === 0 ){
    return '';
  }

    return (
        <div className="top-section">
            <BlogNavbar></BlogNavbar>
            <Blogfilter></Blogfilter>
            <div className="list">
                {posts.length > 0 && posts.map( post => (
                    <Post {...post} />
            ))}

            </div>
        </div>

    );
}