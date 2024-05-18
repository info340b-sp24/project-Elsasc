import React from 'react';

export function Filter(props) {
    const tags = ["Indoor", "Outdoor", "Park", "Sightseeing", "Shopping", "Restaurant", "Other"];
    const prices = ["Free", "Cheap", "Moderate", "Expensive"];
  
    return (
      <div className="card border border-dark shadow-lg rounded mb-5 mx-5">
        <div className="card-title">
          <h2 className="fs-2 text-center">Filter</h2>
        </div>
        <div className="card-body">
          <div className="d-grid gap-2 px-2 d-md-block rounded text-start mx-5">
            <p className="fs-3 text-start">General Tags:</p>
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-outline-success" type="button" data-bs-toggle="button">
                {tag}
              </button>
            ))}
  
            <p className="fs-3 text-start">Tags - Price:</p>
            {prices.map((price, index) => (
              <button key={index} className="btn btn-outline-success" type="button" data-bs-toggle="button">
                {price}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
