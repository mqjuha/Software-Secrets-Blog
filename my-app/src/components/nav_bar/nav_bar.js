import * as React from 'react';
import ReactLogo from './../../logo.svg';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Routes, Route, useNavigate} from 'react-router-dom';
//import Home from "./../../pages/home_page.js"

import history from './../../pages/history';

//import MenuList from '@mui/material/MenuList';
//import { MenuRounded } from '@mui/icons-material';


export default function Navbar() {

    const navigate = useNavigate();

    const navigateToAboutUs = () => {
      navigate('/about');
    };

    const navigateToHome = () => {
      navigate('/');
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    // Open the menu bar
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    // Close the menu bar
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <nav className="navigation">
        <img src={ReactLogo} className="logo" />
        <IconButton
          onClick={handleClick}
        >
          <MenuRoundedIcon className='icon'/>
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={navigateToHome}>Home Page</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Feedback</MenuItem>
          <MenuItem onClick={navigateToAboutUs}>About Us</MenuItem>
        </Menu>

        <button className='nav_button' onClick={() => history.push('/Home')}>Home Page</button>
        <button className='nav_button'>Blog</button>
        <button className='nav_button'>About Us</button>

        <IconButton>
          <SearchRoundedIcon className='icon'/>
        </IconButton>

      </nav>
    );
  }

          /*<Routes>
          <Route path='./../pages/home_page' element={<Home />} />
        </Routes>*/