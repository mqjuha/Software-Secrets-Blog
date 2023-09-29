import * as React from 'react';
import { useEffect, useState } from "react";

import Blogfilter from "../../components/blog_filter/blog_filter";
import BlogNavbar from "../../components/blog_nav_bar/blog_nav_bar";
import Post from '../../components/post/post';

import './blog_layout.css'
import { Typography } from '@mui/material';

export default function Business() {

  const [posts, setPosts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [order, setOrder] = useState('');

  const includesAll = (arr, values) => values.every(v => arr.includes(v));

  function filterByKeywords(item) {
    return (includesAll(item.keywords, filters));
  }

  function sortPosts() {
    let sorted = posts;

    if (order === 'From latest to oldest') {
      sorted.sort((a,b) =>
      a.date.localeCompare(b.date));
      console.log(sorted);
      setPosts(sorted)
      
    }

    if (order === 'Alphabetical order') {
      sorted.sort(function(a,b){
        var titleA = a.title.toUpperCase();
        console.log(titleA)
        var titleB = b.title.toUpperCase();
        console.log(titleB)
        return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
      });
      
      console.log(sorted);
      setPosts(sorted)
      
    }

    if (order === 'From oldest to latest') {
      sorted.sort((a,b) =>
      a.date.localeCompare(b.date));
      sorted.reverse();
      console.log(sorted);
      setPosts(sorted)
      
    }

    
  }

  const changeFilters = (ord, ftr) => {
    setFilters(ftr)
    setOrder(ord)

    const filtered = posts.filter(filterByKeywords);
    
    setPosts(filtered)
    sortPosts()
  }

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
    return (
      <div className="top-section">
      <BlogNavbar></BlogNavbar>
      <Blogfilter changeFilters={changeFilters}></Blogfilter>
        <div className='error-message'>
          <Typography className='message'>No results.</Typography>
        </div>
      </div>
    )
  }

    return (
        <div className="top-section">
            <BlogNavbar></BlogNavbar>
            <Blogfilter changeFilters={changeFilters}></Blogfilter>
            <div className="list">
                {posts.length > 0 && posts.map( post => (
                    <Post {...post} />
            ))}

            </div>
        </div>

    );
}