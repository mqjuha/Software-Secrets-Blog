import * as React from 'react';

import Blogfilter from '../components/blog_filter/blog_filter';
import BlogNavbar from '../components/blog_nav_bar/blog_nav_bar';

import References from '../components/references/references.js';
import TableComparison from '../components/navigation/table_comparison.js';

import blog_banner from '../images/blog_banner.jpg'

function FrontPage() {

  setTimeout(() => {
    document.getElementById('banner_image').src = blog_banner;
    document.getElementById("banner-header").innerHTML = '';
  }, 60);

  return (
    <div>
      <BlogNavbar></BlogNavbar>
      <p>Front Page of Blog</p>
      <TableComparison></TableComparison>
      <References></References>    
    </div>
  );
}
  
export default FrontPage;