import './App.css';
import './themes.css';
import './layout.css';
import './component_styles.css';
import './components/nav_bar/nav_bar.css';

import React, { useState } from "react";

import Navbar from './components/nav_bar/nav_bar.js';
import Home from './pages/home_page';
import About from './pages/about_us_page';
import Feedback from './pages/feedback_page';
import Blog from './pages/front_page';

import { Routes, Route } from 'react-router-dom';


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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="frontpage" element={<Blog />} />
      </Routes>

    </div>
  );
}

export default App;
