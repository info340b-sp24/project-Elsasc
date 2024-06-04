import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';



export function Filter(props) {
  const [tagButtonName, setTagButtonName] = useState('All');
  const [priceButtonName, setPriceButtonName] = useState('All');

  const [priceTracker, setPriceTracker] = useState('')
  const [tagTracker, setTagTracker] = useState('')


  const handleTagFilterClick = (event) => {
    // console.log(event.target.value)
    props.applyTagFilterCallback(event.target.value)
    setTagButtonName(event.target.value)
  }

  const handlePriceFilterClick = (event) => {
    // console.log(event.target.value)
    props.applyPriceFilterCallback(event.target.value)
    setPriceButtonName(event.target.value)
  }

  const handleSearchChange = (event) => {
    // console.log(event.target.value)
    props.applySearchFilterCallback(event.target.value)

  }

  const tags = ["Indoor", "Outdoor", "Park", "Sightseeing", "Shopping", "Restaurant", "Other"];
  const prices = ["Free", "Cheap", "Moderate", "Expensive"];

  const tagOptions = tags.map((tag, index) => {
    const tagButtonItem = <Dropdown.Item as="button" variant="success" value={tag} key={tag} onClick={handleTagFilterClick}>{tag}</Dropdown.Item>
    return tagButtonItem;
  });

  const priceOptions = prices.map((price, index) => {
    const priceButtonItem = <Dropdown.Item as="button" variant="success" value={price} key={price} onClick={handlePriceFilterClick}>{price}</Dropdown.Item>
    return priceButtonItem;
  });

  return (
    <div className="card border border-dark shadow-lg rounded mb-5 mx-5">
      

      <div className="card-title">
        <h2 className="fs-2 text-center">Filter</h2>
      </div>
      <div className="card-body">

        <div className="d-grid gap-2 px-2 d-md-block rounded text-start mx-5">
        <p className="fs-3 text-start">Search By Name:</p>
          
          <Form>
          <Form.Control className='my-3 border border-success' size="lg" type="text" placeholder="Search..." onChange={handleSearchChange}/>
          </Form>

          <p className="fs-3 text-start">General Tags:</p>
      
          <DropdownButton id="dropdown-item-button" variant="success" title={tagButtonName} className="m-1">
            <Dropdown.Item as="button" variant="success" value="All" key="All" onClick={handleTagFilterClick}>All</Dropdown.Item>
            {tagOptions}
          </DropdownButton>

          <p className="fs-3 text-start">Tags - Price:</p>

          <DropdownButton id="dropdown-item-button" variant="success" title={priceButtonName} className="m-1">
            <Dropdown.Item as="button" variant="success" value="All" key="All" onClick={handlePriceFilterClick}>All</Dropdown.Item>
            {priceOptions}
          </DropdownButton>
        </div>
        <p className="fs-5 text-start">Hint: Click the heart symbol on the cards to see them on your liked locations page</p>
      </div>
    </div>
  );
}
