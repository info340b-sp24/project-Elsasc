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
    
    const [filterTag, setFilterTag] = useState('All');
    const [filterPrice, setFilterPrice] = useState('All');
    const [filterSearch, setFilterSearch] = useState('');
    
    
    function applyTagFilter(tag){
        console.log("1Currently tag filter is: " + tag)
        setFilterTag(tag)
        console.log("2Currently tag filter is: " + tag)

    }

    function applyPriceFilter(price){
        console.log("1Currently price filter is: " + price)
        setFilterPrice(price)
        console.log("2Currently price filter is: " + price)

    }

    function applySearchFilter(searchTerm){
        setFilterSearch(searchTerm)
    }

    // const filteredLocData = props.locations.filter((loc) => {
    //     if (filterTag === null && filterPrice === null){
    //       return loc;
    //     }
        
    //     else if(filterPrice === null){
    //       if (filterTag.some((tagName) => loc.tags.includes(tagName))){ // This code checks if 2 different arrays have any common value 
            
    //       }
            
    //     }
    //     else if(filterTag === null){
    //         if (filterPrice === loc.price){
    //             return loc;
    //         }
    //     }
    //     else{
    //         if ((filterTag.some((tagName) => loc.tags.includes(tagName))) && (filterPrice === loc.price)){
    //                 return loc;
    //             }
    //     }
    //   });
    

    const filteredLocData = locations.filter((loc) => {
        if (filterTag === 'All' && (filterPrice === 'All')){
            return loc;
        }
        else if ((loc.tags.includes(filterTag)) && (filterPrice === 'All')){
            console.log("just tag")
            return loc;
        }
        else if ((filterTag === 'All') && (filterPrice === loc.price)){
            console.log("just price")
            return loc;
        }
        else if ((loc.tags.includes(filterTag)) && (filterPrice === loc.price)){
            console.log("doublefilter")
            return loc;
        }
    })
    
    const searchFilteredLocData = filteredLocData.filter((loc) => {
        if (filterSearch.length < 1){
            return loc;
        }
        else {
        const titleUpper = loc.title.toUpperCase()
        const searchUpper = filterSearch.toUpperCase()
            if (titleUpper.includes(searchUpper)){
            return loc;
        }
    }
    });
    
    
    return (
    <div>
    <NavBar/>
    
    <Routes>
    <Route path="homepage" element={<Homepage locations={searchFilteredLocData} applyTagFilterCallback={applyTagFilter}  applyPriceFilterCallback={applyPriceFilter}  applySearchFilterCallback={applySearchFilter}/>} />
    <Route path="liked-locations" element={<LikedLocation LikedLocationList={SampleLikedLocations}/>} />
    <Route path="timeline" element={<Timeline />} />
    <Route path="quiz" element={<Quiz />} />
    </Routes>

    <Footer1 />
    </div>
    );
}