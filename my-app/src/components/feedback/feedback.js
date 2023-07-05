import * as React from 'react';

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import './feedback.css'

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";

const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: 'Very Satisfied',
    },
  };

export default function Feedbacks () {

    return (
        <div className="section">
            <h2>Give us useful feedback to improve the website! :)</h2>
            <div className="question-column">
                <Typography className="font">What do you think about the blog?</Typography>                  
                <RadioGroupRating></RadioGroupRating>
                <Typography className="font">What do you think about the blog?</Typography>                  
                <RadioGroupRating></RadioGroupRating>
                <Typography className="font">What do you think about the blog?</Typography>                  
                <RadioGroupRating></RadioGroupRating>
                <Typography className="font">What do you think about the blog?</Typography>                  
                <RadioGroupRating></RadioGroupRating>            
            </div>
        </div>

    );
}

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

function RadioGroupRating() {

    const [value, setValue] = React.useState(2);

    return (
        <div className='question-column'>
            <StyledRating
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                highlightSelectedOnly
            />
            <Typography>{customIcons[value].label}</Typography>
        </div>
    );
}