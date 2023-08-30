import * as React from 'react';
import { Fragment } from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import './about_me.css'

import { Typography } from "@mui/material";

import { Link } from 'react-router-dom';
import Email from '@mui/icons-material/Email';

const persons = [
    { 
        name: 'Julia',
        job: 'Student & Research Assistant',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh purus, porta sit amet ultrices in, aliquet sed libero. Nulla a accumsan turpis. Cras aliquet, nunc sollicitudin bibendum iaculis, arcu ante pellentesque nisl, nec tristique nibh quam eu lorem. Vivamus vel quam a neque molestie pulvinar. Sed nec euismod est. Vestibulum at luctus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper lacus a tortor iaculis fringilla.',
        img: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
        linkedin: 'https://www.linkedin.com/in/julia-harttunen-32665617b/',
        email: 'julia.harttunen@tuni.fi',
    },
    { 
        name: 'Krista',
        job: 'Student & Research Assistant',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nibh purus, porta sit amet ultrices in, aliquet sed libero. Nulla a accumsan turpis. Cras aliquet, nunc sollicitudin bibendum iaculis, arcu ante pellentesque nisl, nec tristique nibh quam eu lorem. Vivamus vel quam a neque molestie pulvinar. Sed nec euismod est. Vestibulum at luctus tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper lacus a tortor iaculis fringilla.',
        img: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
        linkedin: '',
        email: 'krista.matasniemi@tuni.fi',
    },
]

export default function PersonalInfo() {
    
    return (
        <Fragment>
            <div className='persons'>
                {persons.map(person=>(
                    <div className='person-section'>
                        <div className='side person-img'>
                            <img src={person.img} />
                        </div>
                        <div className='side'>
                            <div className='person-content'>
                                <Typography className='header'>{person.name}</Typography>
                                <Typography className='header'>{person.job}</Typography>

                                <Typography>{person.desc}</Typography>

                                <div className="contact-info-container">
                                    <div className='side'>
                                        <LinkedInIcon></LinkedInIcon>
                                    </div>
                                    <Link className='side' to={person.linkedin}
                                        >LinkedIn
                                    </Link>
                                </div>

                                <div className="contact-info-container">
                                    <div className='side'>
                                        <EmailIcon></EmailIcon>
                                    </div>
                                    <Typography className='side'
                                        >{person.email}
                                    </Typography>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}