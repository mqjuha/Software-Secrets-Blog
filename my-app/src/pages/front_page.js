import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'

function FrontPage() {

  return (
    <div>
      <Navbar></Navbar>
      <p>Front Page of Blog</p>        
    </div>
  );
}
  
export default FrontPage;