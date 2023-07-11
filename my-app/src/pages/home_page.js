import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'


import mainTheme from './../themes/main_theme';

import { Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Home() {

  return (
    <ThemeProvider theme={mainTheme}>
    <div>
      <Navbar className='top_bar'></Navbar>
      <p>HOME PAGE</p>  
      <Typography>MOII</Typography>      
    </div>
    </ThemeProvider>
  );
}
  
export default Home;