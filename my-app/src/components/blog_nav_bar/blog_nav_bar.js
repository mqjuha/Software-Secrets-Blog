import * as React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import './blog_nav_bar.css'


export default function BlogNavbar() {

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
      <nav className="blog-navigation">

        <div>
          <button className={'blog-nav_button red-theme'} onClick={() => navigateToPage('/blog/business')}>Business</button>
          <button className={'blog-nav_button blue-theme'} onClick={() => navigateToPage('/blog/technology')}>Technology</button>
          <button className={'blog-nav_button yellow-theme'} onClick={() => navigateToPage('/blog/ux')}>UX</button>
        </div>

      </nav>
    );
  }