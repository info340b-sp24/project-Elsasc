import React, { useEffect, useState } from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Quiz } from './Quiz';
import { Homepage } from './Homepage'
import { LikedLocation } from './LikedLocation';
import { Timeline } from './timeline';
import { Footer1 } from './Footer';
import { NavBar } from './NavBar';
import { AboutDetails } from './AboutDetails.js';
import { AboutPage } from './About.js';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';
import { LearnMore } from './LearnMore.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


//importing firebase and its methods
import { getDatabase, ref, get } from "firebase/database";
import app from "../firebaseConfig"
import Users from '../data/Users.json'
import { LoginScreen } from './Login.js';

export default function App(props) {
    const theRoute = useLocation()
    const [myLocations, setLocations] = useState([])

    // User integration IMPORTANT: NOT USED IN FEATURES BUT WILL ALLOW
    // FOR SIGN IN AND DISPLAY NAME ON NAVBAR (Kept in for future interest )
    // per the conversation with Zach & Cole
    const [currentUser, setCurrentUser] = useState(Users[0])

    const loginUser = (userObj) => {
        setCurrentUser(userObj);
        
    }
    useEffect(() => {
        // log in a default user
        // loginUser(DEFAULT_USERS[1])
    
        const auth = getAuth();
                        // authenticator, a callback
        onAuthStateChanged(auth, (firebaseUser) => {
          if(firebaseUser) {
            firebaseUser.userId = firebaseUser.uid;
            firebaseUser.userName = firebaseUser.displayName;
            // console.log("firebaseuser after adding fields :", firebaseUser)
            setCurrentUser(firebaseUser);
          }
          else { //no user
            setCurrentUser(Users[0]); //change the null user
          }
        })
    
    
      }, [])


    //   USER integration above
    // Filter (old) below

    const [filterTag, setFilterTag] = useState('All');
    const [filterPrice, setFilterPrice] = useState('All');
    const [filterSearch, setFilterSearch] = useState('');

    function runThisText() {
        // console.log("att call")
    }

    function applyTagFilter(tag) {
        setFilterTag(tag)

    }

    function applyPriceFilter(price) {
        setFilterPrice(price)
    }

    function applySearchFilter(searchTerm) {
        setFilterSearch(searchTerm)
    }


    async function getTheLocations() {
        const db = getDatabase(app)
        const newDocRef = ref(db, "locations")
        const snapshot = await get(newDocRef)

        if (snapshot.exists()) {
            var myData = snapshot.val()
            const dataWithKey = Object.keys(myData).map(theKey => {
                return {
                    ...myData[theKey],
                    objectKey: theKey
                }
            })
            setLocations(dataWithKey)
        } else {
            alert("something went wrong")
        }
    }

    useEffect(() => {
        getTheLocations()
    }, [theRoute])

    //  REDUNDANT FILTER CODE, KEPT FOR FUTURE INTEREST
    // const filteredLocData = locations.filter((loc) => {
    //     if (filterTag === 'All' && (filterPrice === 'All')) {
    //         return loc;
    //     }
    //     else if ((loc.tags.includes(filterTag)) && (filterPrice === 'All')) {
    //         console.log("just tag")
    //         return loc;
    //     }
    //     else if ((filterTag === 'All') && (filterPrice === loc.price)) {
    //         console.log("just price")
    //         return loc;
    //     }
    //     else if ((loc.tags.includes(filterTag)) && (filterPrice === loc.price)) {
    //         console.log("doublefilter")
    //         return loc;
    //     }
    // })

    // const searchFilteredLocData = filteredLocData.filter((loc) => {
    //     if (filterSearch.length < 1) {
    //         return loc;
    //     }
    //     else {
    //         const titleUpper = loc.title.toUpperCase()
    //         const searchUpper = filterSearch.toUpperCase()
    //         if (titleUpper.includes(searchUpper)) {
    //             return loc;
    //         }
    //     }
    // });


    return (
        <div>
            <NavBar currentUser={currentUser} />

            <Routes>                
                <Route path="*" element={<Navigate to="/homepage"/>} />
                <Route path="homepage" element={<Homepage locations={myLocations} myTestAttr={runThisText} applyTagFilterCallback={applyTagFilter} applyPriceFilterCallback={applyPriceFilter} applySearchFilterCallback={applySearchFilter} filterSearchQ={filterSearch} filterPrice={filterPrice} filterTag={filterTag} />} />
                <Route path="liked-locations" element={<LikedLocation LikedLocationList={myLocations} />} />
                <Route path="timeline" element={<Timeline currentUser={currentUser} />} />
                <Route path="quiz" element={<Quiz />} />
                <Route path="login" element={<LoginScreen currentUser={currentUser} loginCallback={loginUser} />} />
                <Route path="about" element={<AboutPage />}/>
                <Route path="learn-more" element={<LearnMore />}>
                    <Route path=":aboutPageName" element={<AboutDetails />} />
                </Route>

            </Routes>

            <Footer1 />
        </div>
    );
}
