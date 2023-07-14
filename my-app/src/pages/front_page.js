import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'
import Blogfilter from '../components/blog_filter/blog_filter';

function FrontPage() {

  return (
    <div>
      <Navbar className='top_bar'></Navbar>
      <Blogfilter></Blogfilter>
      <p>Front Page of Blog</p>        
    </div>
  );
}
  
export default FrontPage;