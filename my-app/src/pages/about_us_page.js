import * as React from 'react';
import ComparisonDiagram from '../components/navigation/comparison';

import about_us_banner from '../images/about_us_banner.jpg';

function About() {

  setTimeout(() => {
    document.getElementById('banner_image').src = about_us_banner;
    document.getElementById("banner-header").innerHTML = '';
  }, 60);

  return (
    <div>
      <p>About Us</p>  
      <ComparisonDiagram 
        variant="comp3" 
        titles={["otsikko1", "otsikko2", "otsikko 3"]} 
        contents={["liibalaabaa", "luubaliibaa","mfmgldj"]}
      /> 
    </div>
  );
}
  
export default About;