import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Quiz } from './Quiz';
import {Homepage} from './Homepage'
import { LikedLocation } from './LikedLocation';
import { Timeline } from './timeline';
import { Footer1 } from './Footer';
import { NavBar } from './NavBar';
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-dom/client';

import SampleLikedLocations from '../data/SampleLikedLoc.json'

export default function App(props){
 
    
    
    return (
    <div>
    <NavBar/>
    
    <Routes>
    <Route path="homepage" element={<Homepage />} />
    <Route path="liked-locations" element={<LikedLocation LikedLocationList={SampleLikedLocations}/>} />
    <Route path="timeline" element={<Timeline />} />
    <Route path="quiz" element={<Quiz />} />
    </Routes>

    <Footer1 />
    </div>
    );
}