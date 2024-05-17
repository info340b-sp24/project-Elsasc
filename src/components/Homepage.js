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
    <body className='home-page'>
      <header>
        <h1 className="my-0 py-0 bg-light">Homepage - Seattle best locations</h1>

        <nav className="navbar navbar-expand-lg bg-light navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Seattle is FUN!
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation bar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
              
                {/* <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Quiz
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    Timeline
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/likedLocation">
                    Liked Locations
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>

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
          /* <h2 className="fs-2 text-center">Locations</h2>
          <div className="row">
          <LocationCardList locations={locations}/>
          </div>
          </div>
      </main>
      
    </body>
  );
}