import React from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import AboutDescriptions from '../data/AboutDescriptions.json'

export function AboutDetails(props) {
    // const params =  
    const aboutPageName = useParams().aboutPageName; //REPLACE THIS WITH CORRECT VALUE

    let page = _.find(AboutDescriptions, { pageId: aboutPageName }); //find pet in data

    if (!page) return <h2>Error: No Page Found</h2> //if unspecified


    return (
        <div className="card border border-dark rounded shadow-lg mb-5 pd-0">
            <div className="card-title">
                <h3 className="fs-2 text-center"> {page.title} </h3>
            </div>

            <div className="card-body">
                <div className="d-grid gap-2 px-2 d-md-block rounded">
                    <p className="fs-3"> {page.description}</p>
                </div>
            </div>

        </div>
    );
}