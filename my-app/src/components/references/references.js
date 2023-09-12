import {useRef, Fragment} from 'react';

import './references.css'

//const test_data = ["M. Erikson, What is a Product Manager?, Medium, 18.2.2016. Available: https://medium.com/@bfgmartin/what-is-a-product-manager-ce0efdcf114c", "Source 2", "P. Rodriguez, C. Urquhart and E. Mendes, A Theory of Value-Based Feature Se-lection in Software Engineering, IEEE Transaction on software engineering, 2022, vol. 48, no. 2."];
// date(year, mont, day)

const test_data = [
    {
        authors: 'Authors',
        year: new Date(2023, 10, 10),
        title: 'Title',
        source: [{
            book_title: 'Book title',
            edition: 'Edition',
            publisher: 'Publisher',
            address: 'Address',
        }],
        pages: 'Pages',
        series: 'Series',
        url: 'url',
        access_date: new Date(2023, 10, 10),
    },
    {
        authors: null,
        year: new Date(2023, 10, 10),
        title: 'Title',
        source: [{
            journal_name: 'Journal name',
            volumer: 3,
            number: 3,
        }],
        pages: 'Pages',
        series: 'Series',
        url: null,
        access_date: new Date(2023, 10, 10),
    }
]


function AddPoint (props) {

    const pair = props.pair;
    console.log(pair[1]);

    /*for (const [key, value] of Object.entries(ref)) {
        console.log(`${key} ${value}`);
    }*/

    return (
        <div>
            { pair[0] === 'accessdate' ?
            (
                <div>
                    Available ({pair[1].toLocaleDateString()}): 
                    <a className='href' href={pair[1]}>{pair[1]}</a>
                </div>
            ) : (
                <div></div>
            )
            }
        </div>
    )

};

function RefList(props) {
    const data = props.database;

    console.log(data);

    return (
        <ul>
            {
                data.map((ref) => (
                    <li className='ref-text'>
                        {
                            Object.entries(ref).map(([key, value]) => (
                                <AddPoint pair={[key, value]}></AddPoint>
                            )
                            )
                        }
                    </li>
                ))
            }
        </ul>
    );
};

export default function Endbar () {

    return (
        <Fragment>
            <div className='ref-section'>
                <h2 className='ref-header'>References</h2>
                <RefList database={test_data}></RefList>
            </div>
        </Fragment>
    );
}

/*
                            {data.authors}. ({data.year.toLocaleDateString()}). {data.title}. {data.pages}. {data.series}.
                        { data.url !== null ?
                        (
                            <div>
                                Available ({data.access_date.toLocaleDateString()}): 
                                <a className='href' href={data.url}>{data.url}</a>
                            </div>
                        ) : (
                            <div></div>
                        )
                        }*/