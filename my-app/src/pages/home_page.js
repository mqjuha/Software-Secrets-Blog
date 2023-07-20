import * as React from 'react';

import './home_page.css'

import ReactLogo from './../logo.svg';

import Highlights from '../components/highlights/highlights';
import { Typography } from '@mui/material';

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
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  }
]

function Home() {

  const textPlaseHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh purus, porta sit amet ultrices in, aliquet sed libero. Nulla a accumsan turpis. Cras aliquet, nunc sollicitudin bibendum iaculis, arcu ante pellentesque nisl, nec tristique nibh quam eu lorem. Vivamus vel quam a neque molestie pulvinar. Sed nec euismod est. Vestibulum at luctus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper lacus a tortor iaculis fringilla.";

  // Get from database
  const topics = [
    {
      id: 1,
      title: "Title 1",
      desc: textPlaseHolder,
      img: ReactLogo,
      theme: "red-theme"
    },
    {
      id: 2,
      title: "Title 2",
      desc: textPlaseHolder,
      img: ReactLogo,
      theme: "blue-theme"
    },
    {
      id: 3,
      title: "Title 3",
      desc: textPlaseHolder,
      img: ReactLogo,
      theme: "yellow-theme"
    }
  ]

  
  return (

    <div className='wrapper'>
      <div className='content'>
        <Typography className='header'>Title</Typography> 
        <Typography>{textPlaseHolder}</Typography>
      </div>
      <Highlights></Highlights>
      <div className='topics'>
        {topics.map(topic=>(
          <div className={`topic ${topic.theme}`} key={topic.id}>
            <div className='img'>
              <img  src={topic.img} />
            </div>
            <div className='content'>
              <Typography className='header'>{topic.title}</Typography>
              <Typography>{topic.desc}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
  
export default Home;