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

import { TextField, Button, Typography } from '@mui/material';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

//import Pagination from '@mui/material/Pagination';
//import Stack from '@mui/material/Stack';


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

  const sendFeedbackToEmail = (message) => {
    <a href="mailto:email@example.com">Click to Send an Email</a>
  };

  export default function Feedbacks () {

    const form = useRef();

    // Sends feedback to Julia's email
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_3u94pwf',
        'template_86p0tkk',
        form.current,
        '2Nxivev2iyC5CDLQB'
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <div className="section">
            <h2>Give us useful feedback to improve the website! :)</h2>
            
              <form className="question-column" ref={form} onSubmit={sendEmail}>
                <div className='question'>
                  <RadioGroupRating name='question1'></RadioGroupRating>         
                  <RadioGroupRating name='question2'></RadioGroupRating>               
                  <RadioGroupRating name='question3'></RadioGroupRating>                
                  <RadioGroupRating name='question4'></RadioGroupRating>
                </div>
                <div className="question-column">
                  <Typography className="font">Please give feedback !</Typography>  
                  <TextField
                    multiline
                    rows={4}
                    variant="outlined"
                    color='secondary'
                    fullWidth
                    defaultValue="Thank you for the feedback!"
                    name='free_feedback'
                    style={{background: "white"}}
                  />
                  <Button
                    className='send_button'
                    type='submit'
                    >
                    Send Feedback
                  </Button>
                </div>
              </form>
            
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
          <Typography>What do you think about the blog?</Typography>
           
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