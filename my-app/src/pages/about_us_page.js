import * as React from 'react';
import ComparisonDiagram from '../components/navigation/comparison';

function About() {

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