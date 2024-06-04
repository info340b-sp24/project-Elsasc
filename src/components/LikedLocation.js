import React, { useEffect, useState } from 'react';
import { LikedLocationList } from './likedLocationList';
// import { Link } from "react-router-dom";

export function LikedLocation(props) {
    const likedLocationList = props.LikedLocationList
    return (
        <div className='home-page' lang='en'>
            <div className="home-page">
                <main>
                <h1 className="fs-2 text-center pt-5"> Locations you liked </h1>
                <div className="container">
                    <LikedLocationList locations={likedLocationList} />
                </div>
                </main>
            </div>

        </div>
    );
}