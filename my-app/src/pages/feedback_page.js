import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'

function Feedback() {

  return (
    <div>
      <Navbar className='top_bar'></Navbar>
      <p>Feedback Page</p>        
    </div>
  );
}
  
export default Feedback;