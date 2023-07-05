import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'

import Highlights from '../components/highlights/highlights';

function Home() {

  return (
    <div>
      <Navbar></Navbar>
      <p>HOME PAGE</p>
      <Highlights></Highlights>        
    </div>
  );
}
  
export default Home;