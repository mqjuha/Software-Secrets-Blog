import './App.css';
import './themes.css';
import './layout.css';
import './component_styles.css';
import './components/nav_bar/nav_bar.css';

import React, { useState } from "react";
import Navbar from './components/nav_bar/nav_bar.js';


function App() {

  const [theme, updateTheme] = useState("blue-theme");

  const toggleTheme = () => {

  };

  const classes = {
    'test_button': true,
    'button': true,
  }

  return (
    <div className='blue_theme wrapper'>
      <Navbar className='top_bar'></Navbar>
    </div>
    /*<div className='top_bar blue-theme'>
      <div>
        <button className='test_button'>1</button>
        <button className='test_button'>2</button>
      </div>
      <div>
        <button className='test2_button button'>3</button>
        <button className='test2_button button'>4</button>
        <button className='test2_button button'>5</button>
      </div>
      <button className='test_button'>6</button>
    </div>*/
  );
}

export default App;
