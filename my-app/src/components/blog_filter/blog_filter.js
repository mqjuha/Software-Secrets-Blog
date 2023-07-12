import { Fragment } from "react";
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



import mainTheme from './../../themes/main_theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import './blog_filter.css'

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


function Search_field () {
    return (
        <div>
            <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="filterSelectedOptions"
            placeholder="Favorites"
            color="secondary"
            focused
          />
        )}
        
      />
        </div>
    )
}

function Filter_selector () {
    return (
        <div>
            <div>
                
            </div>

        </div>
    )
}

function Sort_selector () {
    return (
        <div>

        </div>
    )
}

export default function Blogfilter () {
    return (
        <ThemeProvider theme={mainTheme}>
        <Fragment>
            <div className="section">
                <Search_field></Search_field>
                <Filter_selector></Filter_selector>
                <Sort_selector></Sort_selector>
            </div>
        </Fragment>
        </ThemeProvider>
    )
}