import * as React from 'react';

import Blogfilter from '../components/blog_filter/blog_filter';
import BlogNavbar from '../components/blog_nav_bar/blog_nav_bar';

function FrontPage() {

  return (
    <div>
      <BlogNavbar></BlogNavbar>
      <p>Front Page of Blog</p>       
    </div>
  );
}
  
export default FrontPage;