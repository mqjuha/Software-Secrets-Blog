import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'
import Endbar from '../components/end_bar/end_bar';

function About() {

  return (
    <div>
      <Navbar className='top_bar'></Navbar>
      <p>About Us</p>      
      <Endbar></Endbar>  
    </div>
  );
}
  
export default About;