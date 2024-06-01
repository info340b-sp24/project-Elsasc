import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Quiz } from './Quiz';
import {Homepage} from './Homepage'
import { LikedLocation } from './LikedLocation';
import { Timeline } from './timeline';
import { Footer1 } from './Footer';
import { NavBar } from './NavBar';
import {Routes, Route, useLocation, Navigate, useNavigate, Outlet, navigateTo} from 'react-router-dom';
import { BrowserRouter } from 'react-dom/client';


//importing firebase and its methods
import { getDatabase, ref, get } from "firebase/database";
import app from "../firebaseConfig"

import SampleLikedLocations from '../data/SampleLikedLoc.json'
import locations from '../data/Location.json'
import Users from '../data/Users.json'

export default function App(props){
console.log("is that app")
    const theRoute = useLocation()
    const [myLocations, setLocations] = useState([])
   
    // User integration
    const [currentUser, setCurrentUser] = useState(Users[0])

    const loginUser = (userObj) => {
        console.log("logging in as", userObj.userName);
        setCurrentUser(userObj);
    
      }
 
// HERE IS WHERE THE FILTER CURRENTLY SITS 
// WHERE THE FILTER GOES IS from App.js -> Homepage.js -> Filter.js (Buttons currently in process of fixing)
    
    const [filterTag, setFilterTag] = useState('All');
    const [filterPrice, setFilterPrice] = useState('All');
    const [filterSearch, setFilterSearch] = useState('');
    
    function runThisText(){
        console.log("att call")
    }

    function applyTagFilter(tag){
        setFilterTag(tag)

    }

    function applyPriceFilter(price){
        setFilterPrice(price)
    }

    function applySearchFilter(searchTerm){
        setFilterSearch(searchTerm)
    }


    async function getTheLocations(){
        const db = getDatabase(app)
        const newDocRef = ref(db, "locations")
        const snapshot = await get(newDocRef)
  
        if(snapshot.exists()){
            var myData = snapshot.val()
            const dataWithKey = Object.keys(myData).map(theKey => {
                return{
                    ...myData[theKey],
                    objectKey: theKey
                }
            })
            setLocations(dataWithKey)
        }else{
            alert("something went wrong")
        }
    }

    useEffect(()=>{
        getTheLocations()
    },[theRoute])
    

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
    <Route path="/" element={<Homepage locations={myLocations} myTestAttr={runThisText} applyTagFilterCallback={applyTagFilter}  applyPriceFilterCallback={applyPriceFilter}  applySearchFilterCallback={applySearchFilter} filterSearchQ={filterSearch} filterPrice={filterPrice} filterTag={filterTag}/>} />
    <Route path="homepage" element={<Homepage locations={myLocations} myTestAttr={runThisText} applyTagFilterCallback={applyTagFilter}  applyPriceFilterCallback={applyPriceFilter}  applySearchFilterCallback={applySearchFilter} filterSearchQ={filterSearch} filterPrice={filterPrice} filterTag={filterTag}/>} />
    <Route path="liked-locations" element={<LikedLocation LikedLocationList={myLocations}/>} />
    <Route path="timeline" element={<Timeline />} />
    <Route path="quiz" element={<Quiz />} />
    <Route path="login"/>
    </Routes>

    <Footer1 />
    </div>
    );
}