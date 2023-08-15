import * as React from 'react';

import Blogfilter from '../components/blog_filter/blog_filter';
import BlogNavbar from '../components/blog_nav_bar/blog_nav_bar';

import References from '../components/references/references.js';
import TableComparison from '../components/navigation/table_comparison.js';
import Timeline from '../components/navigation/timeline.js';
import Timeline2 from '../components/navigation/timeline2.js';

import blog_banner from '../images/blog_banner.jpg'

function FrontPage() {

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
      <Timeline2></Timeline2>
      <Timeline></Timeline>
      <TableComparison></TableComparison>
      <References></References>    
    </div>
  );
}
  
export default FrontPage;