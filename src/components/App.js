import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import { Quiz } from './Quiz';
import {Homepage} from './Homepage'
import { LikedLocation } from './LikedLocation';
import { Timeline } from './timeline';
import { Footer1 } from './Footer';
import { NavBar } from './NavBar';


// Cleaned

export default function App(props){
    return (
    <div>
    <NavBar/>
    {/* <Homepage /> */}
    {/* <LikedLocation/> */}
    <Quiz/>
    {/* <Timeline /> */}
    <Footer1 />
    </div>
    );
}