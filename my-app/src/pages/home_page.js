import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'

function Home() {

  return (
    <div>
      <Navbar className='top_bar'></Navbar>
      <p>HOME PAGE</p>        
    </div>
  );
}
  
export default Home;