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
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: "#424f58",
      main: "#13232F",
      dark: "#0d1820"
    },
    socundary: {
      light: "#dadada",
      main: "#D1D1D1",
      dark: "#929292"
    },
    background: {
      default: "#FAF9F0",
      paper: "#13232F"
    },
    text: {
      primary: "#13232F",
      secondary: "#FAF9F0"
    },
    divider: {
      divider: "#13232F"
    }
  },
});


function App() {

  const [theme, updateTheme] = useState("blue-theme");

  const toggleTheme = () => {

  };

  const classes = {
    'test_button': true,
    'button': true,
  }

  return (
    <ThemeProvider theme={theme}>
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
