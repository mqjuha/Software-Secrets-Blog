import * as React from 'react';
import ReactLogo from './../../logo.svg';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Routes, Route, useNavigate} from 'react-router-dom';
//import Home from "./../../pages/home_page.js"

//import history from './../../pages/history';

//import MenuList from '@mui/material/MenuList';
//import { MenuRounded } from '@mui/icons-material';


export default function Navbar() {

    const navigate = useNavigate()

    // Navigate to different page
    const navigateToPage = (page) => {
      navigate(page);
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



        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => navigateToPage('/')}>Home Page</MenuItem>
          <MenuItem onClick={() => navigateToPage('/blog')}>Blog</MenuItem>
          <MenuItem onClick={() => navigateToPage('/feedback')}>Feedback</MenuItem>
          <MenuItem onClick={() => navigateToPage('/aboutus')}>About Us</MenuItem>
        </Menu>

        <button className='nav_button' onClick={() => navigateToPage('/')}>Home Page</button>
        <button className='nav_button' onClick={() => navigateToPage('/blog')}>Blog</button>
        <button className='nav_button' onClick={() => navigateToPage('/aboutus')}>About Us</button>



      </nav>
    );
  }

  /*

  -- Ennen menu elementtiä

          <IconButton
          onClick={handleClick}
        >
          <MenuRoundedIcon className='icon'/>
        </IconButton>

  -- Viimeisen buttonin jälkeen

                <IconButton>
          <SearchRoundedIcon className='icon'/>
        </IconButton>

  */