import './App.css';
import './themes.css';
import './layout.css';
import './component_styles.css';
import './components/nav_bar/nav_bar.css';

import React, { useState } from "react";

import Navbar from './components/nav_bar/nav_bar.js';
import Highlights from './components/highlights/highlights';
import Endbar from './components/end_bar/end_bar';
import Blogfilter from './components/blog_filter/blog_filter';
import Home from './pages/home_page';
import About from './pages/about_us_page';
import Feedback from './pages/feedback_page';
import Blog from './pages/front_page';

import mainTheme from './themes/main_theme';
import redTheme from './themes/red_theme';
import blueTheme from './themes/blue_theme';
import yellowTheme from './themes/yellow_theme';

import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const [colorTheme, updateTheme] = useState("blue-theme");

  const themeMain = createTheme(mainTheme);
  const themeRed = createTheme(redTheme);
  const themeBlue = createTheme(blueTheme);
  const themeYellow = createTheme(yellowTheme);

  const toggleTheme = () => {

  };

  const classes = {
    'test_button': true,
    'button': true,
  }

  return (
    <ThemeProvider theme={themeMain}>
      <div className='blue_theme wrapper'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<About />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
