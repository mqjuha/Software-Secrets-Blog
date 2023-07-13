import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'

import Feedbacks from '../components/feedback/feedback';


function Feedback() {

  return (
    <div>
      <Navbar></Navbar>
      <Feedbacks></Feedbacks>
    </div>
  );
}
  
export default Feedback;