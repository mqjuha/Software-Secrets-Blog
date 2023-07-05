import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'

function About() {

  return (
    <div>
      <Navbar></Navbar>
      <p>About Us</p>        
    </div>
  );
}
  
export default About;