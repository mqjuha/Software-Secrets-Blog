import { Fragment } from "react";
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


import mainTheme from './../../themes/main_theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import './blog_filter.css'


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

// get geywords from db
const keywords = [
'keyword1',
'keyword2',
'keyword3'
]

// get types from db
const types = [
  'informatic reading',
  'tutorial',
  'tips and tricks'
]

const sortOptions = [
  'From latest to oldest',
  'Alphabetical order',
  'Most popular'
]


function Search_field () {
    return (
      <Fragment>
        <div className="section">
          <div className="filters">
            <Autocomplete
              className="filter"
              multiple
              id="filter-by-keywords"
              options={keywords}
              disableCloseOnSelect
              getOptionLabel={(option) => option}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Select keywords" placeholder="Keyword" />
              )}
            />
            <Autocomplete
              className="filter"
              multiple
              id="filter-by-type"
              options={types}
              disableCloseOnSelect
              getOptionLabel={(option) => option}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Filter by type" placeholder="Type" />
              )}
            />
          </div>
          <Autocomplete
            className="sort"
            disablePortal
            id="sort-by"
            options={sortOptions}
            renderInput={(params) => <TextField {...params} label="Sort by" />}
          />
        </div>
      </Fragment>
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
        <Fragment>
            <div>
                <Search_field></Search_field>
                <Filter_selector></Filter_selector>
                <Sort_selector></Sort_selector>
            </div>
        </Fragment>
    )
}