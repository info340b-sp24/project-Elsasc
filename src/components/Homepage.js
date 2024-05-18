import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
//import locations from './data/Location.json';
//import Filter from './Filter';
import locations from '../data/Location.json'
import {LocationCardList} from './LocationCardList'
import { Filter } from './Filter';
export function Homepage() {
  const [likedItems, setLikedItems] = useState([]);


  // useEffect(() => {
  //   const storedLikedItems = localStorage.getItem("likedItems");
  //   if (storedLikedItems) {
  //     setLikedItems(JSON.parse(storedLikedItems));
  //   }
  // }, []);

  // const handleLike = (item) => {
  //   const updatedLikedItems = [...likedItems, item];
  //   setLikedItems(updatedLikedItems);
  //   localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
  // };

  return (
  <html lang='en'>
  <head>
  <meta charSet="UTF-8"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <meta name="description" content="Explore the best locations in Seattle. Find parks, restaurants, shopping areas, and more."></meta>
  <meta name="author" content="Vincent, Cole, Brian"></meta>
  <title>SeattleIsFun - Home</title>
  </head>
  
    <body className='home-page'>
    
      <main>

      <h1 className="my-0 py-0">Seattle best locations</h1>
        <div className="container">
          <input
            type="text"
            className="form-control mb-3 my-3"
            placeholder="Search..."
          />

          <div className="row">
            <div className="col bg-auto justify-content-md-center mx-5">
              {/* <!-- Filter --> */}
             
                <Filter/>
            </div>
          </div>
         
          {/* <!-- Location Cards --> */}
          
          <h2 className="fs-2 text-center">Locations</h2>
          
          <LocationCardList locations={locations}/>
          </div>
      </main>
      
    </body>
  </html>
  );
}