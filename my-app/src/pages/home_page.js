import * as React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../components/nav_bar/nav_bar';
import './../layout.css'



import { Autocomplete, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Blogfilter from './../components/blog_filter/blog_filter';

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

  return (

    <div>
      <Navbar className='top_bar'></Navbar>
      <p>HOME PAGE</p>  
    </div>

  );
}
  
export default Home;