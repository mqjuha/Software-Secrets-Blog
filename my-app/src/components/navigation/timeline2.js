import './timeline2.css'

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


const test_items = [
	{ main_text: 'MAIN TEXT', secondary_text: 'secondary', color: 'secondary', },
	{ main_text: 'MAIN TEXT 2', secondary_text: 'secondary', color: 'secondary', },
    { main_text: 'MAIN TEXT 3', secondary_text: 'secondary', color: 'success', },
    { main_text: 'MAIN TEXT 4', secondary_text: 'secondary', color: 'success', },
]

function Timeline2() {

	return (
        <div className='timeline-section'>
            <Timeline position="alternate">

                {test_items.map((item, i) => (

                    <TimelineItem>
                        <TimelineOppositeContent>{item.secondary_text}</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color={item.color} />
                            { i !== test_items.length - 1 && <TimelineConnector />}
                        </TimelineSeparator>
                        <TimelineContent>{item.main_text}</TimelineContent>
                    </TimelineItem>
                    
                ))}

            </Timeline>

        </div>
	)

}

export default Timeline2;