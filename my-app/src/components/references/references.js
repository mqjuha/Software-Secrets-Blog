import {useRef, Fragment} from 'react';

import './references.css'

const test_data = ["M. Erikson, What is a Product Manager?, Medium, 18.2.2016. Available: https://medium.com/@bfgmartin/what-is-a-product-manager-ce0efdcf114c", "Source 2", "P. Rodriguez, C. Urquhart and E. Mendes, A Theory of Value-Based Feature Se-lection in Software Engineering, IEEE Transaction on software engineering, 2022, vol. 48, no. 2."];

function RefList(props) {
    const data = props.database;

    return (
        <ul>
            {
                data.map((data) => (
                    <li className='ref-text'>{data}</li>
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