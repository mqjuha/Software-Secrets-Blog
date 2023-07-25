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

import { Routes, Route, Outlet } from 'react-router-dom';
import { Button, ThemeProvider, Typography, createTheme, Paper, CssBaseline} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import BlogNavbar from './components/blog_nav_bar/blog_nav_bar';
import Business from './pages/blog/business';
import Technology from './pages/blog/technology';
import Ux from './pages/blog/ux';

function BaseStructure() {
  return (
    <div>
      <Navbar className='top_bar'/>
      <Outlet/>
      <Endbar/>
    </div>
  );
}


function App() {

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },];

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
      <CssBaseline/>
      <div>
        <Routes>
          <Route element={<BaseStructure/>}>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<About />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="blog" element={<Blog />} />
            <Route path='blog/business' element={<Business />}/>
            <Route path='blog/technology' element={<Technology />}/>
            <Route path='blog/ux' element={<Ux />}/>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
