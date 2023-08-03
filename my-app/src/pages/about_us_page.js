import * as React from 'react';

import about_us_banner from '../images/about_us_banner.jpg';

function About() {

  setTimeout(() => {
    document.getElementById('banner_image').src = about_us_banner;
    document.getElementById("banner-header").innerHTML = '';
  }, 60);

  return (
    <div>
      <p>About Us</p>      
    </div>
  );
}
  
export default About;