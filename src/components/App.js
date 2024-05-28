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
import locations from '../data/Location.json'

export default function App(props){
    
 
// HERE IS WHERE THE FILTER CURRENTLY SITS 
// WHERE THE FILTER GOES IS from App.js -> Homepage.js -> Filter.js (Buttons currently in process of fixing)
    
    const [filterTag, setFilterTag] = useState(null);
    const [filterPrice, setFilterPrice] = useState(null);

    
    
    function applyFilter(tag, price){
        setFilterTag(tag)
        setFilterPrice(price)

    }

    const filteredLocData = props.locations.filter((loc) => {
        if (filterTag === null && filterPrice === null){
          return loc;
        }
        
        else if(filterPrice === null){
          if (filterTag.some((tagName) => loc.tags.includes(tagName))){ // This code checks if 2 different arrays have any common value 
            
          }
            
        }
        else if(filterTag === null){
            if (filterPrice === loc.price){
                return loc;
            }
        }
        else{
            if ((filterTag.some((tagName) => loc.tags.includes(tagName))) && (filterPrice === loc.price)){
                    return loc;
                }
        }
      });
    
    
    
    return (
    <div>
    <NavBar/>
    
    <Routes>
    <Route path="homepage" element={<Homepage locations={locations} applyFilterCallback={applyFilter}/>} />
    <Route path="liked-locations" element={<LikedLocation LikedLocationList={SampleLikedLocations}/>} />
    <Route path="timeline" element={<Timeline />} />
    <Route path="quiz" element={<Quiz />} />
    </Routes>

    <Footer1 />
    </div>
    );
}