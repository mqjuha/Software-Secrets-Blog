import * as React from 'react';
import ComparisonDiagram from '../components/navigation/comparison';

function About() {

  return (
    <div>
      <p>About Us</p>  
      <ComparisonDiagram 
        variant="comp3" 
        titles={["otsikko1", "otsikko2"]} 
        contents={["liibalaabaa", "luubaliibaa"]}
      /> 
    </div>
  );
}
  
export default About;