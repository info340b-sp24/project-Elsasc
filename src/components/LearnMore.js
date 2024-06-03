import React from 'react';
import { Outlet } from 'react-router-dom';

export function LearnMore(props) {


    return (
        <div style={{ backgroundColor: "#B0E0E6", height: "100vh" }}>
            <div className="d-flex  justify-content-center mx-5" >
                <div className="container">
                    <h2 className="text-start py-4"> Learn More </h2>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

