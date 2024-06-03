import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
//import locations from './data/Location.json';
//import Filter from './Filter';
import locations from '../data/Location.json'
import {LocationCardList} from './LocationCardList'
import { Filter } from './Filter';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/Dropdown';

export function Homepage(props) {
  
  const [likedItems, setLikedItems] = useState([]);
  const [mySearchQ, setSearchQ] = useState("")

  props.myTestAttr()

  return ( 
  
    <div className='home-page'>
    
      <main>

      <h1 className="my-0 py-0 text-center pt-5 pb-4">Seattle best locations</h1>
        <div className="container">

          <div className="row">
            <div className="col bg-auto justify-content-md-center mx-5">
              {/* <!-- Filter --> */}
             
                <Filter applyTagFilterCallback={props.applyTagFilterCallback}  applyPriceFilterCallback={props.applyPriceFilterCallback} applySearchFilterCallback={props.applySearchFilterCallback}/>
            </div>
          </div>
         
          {/* <!-- Location Cards --> */}
          
          <h2 className="fs-2 text-center">Locations</h2>
          
          <LocationCardList locations={props.locations} filterSearchQ={props.filterSearchQ} filterPrice={props.filterPrice} filterTag={props.filterTag}/>
          </div>
      </main>
      
    </div>
  );
}