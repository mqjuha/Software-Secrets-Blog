import './timeline_horizontal.css'

const test_items = [
	{ name: 'Moi mitä kuuluuu', active: true, },
	{ name: 'Step 2', active: true, },
    { name: 'Step 3', active: true, },
    { name: 'Step 4', active: false, },
    { name: 'Step 1', active: true, },
	{ name: 'Step 2', active: true, },
    { name: 'Step 3', active: true, },
    { name: 'Step 4', active: false, },
    { name: 'Step 1', active: true, },
	{ name: 'Step 2', active: true, },
    { name: 'Step 3', active: true, },
    { name: 'Step 4', active: false, },
    { name: 'Step 1', active: true, },
	{ name: 'Step 2', active: true, },
    { name: 'Step 3', active: true, },
    { name: 'Step 4', active: false, }

]

function Timeline() {

    // Let's calculate the progress of the timelime
    // k active — m items: (k — 1) / (m — 1)
    const totalItems = test_items.length;
	const numberOfActiveItems = test_items.filter(item => item.active).length;
	const progressBarWidth = totalItems > 1 ? (numberOfActiveItems - 1) / (totalItems - 1) * 100 : 0;


	return (
        <div className='timeline-section'>
            <div className="timeline">

                <div className='line'></div>

                <div className="progress" style={{ width: `${progressBarWidth}%`}}></div>

                <div className="timeline-items">

                    {test_items.map((item, i) => (
                        <div key={i} className={"timeline-item" + (item.active ? ' active' : '')}>
                            <div className="timeline-content">
                                {item.name}
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
	)

}

export default Timeline;