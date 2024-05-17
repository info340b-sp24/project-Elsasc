import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
//import locations from './data/Location.json';
//import Filter from './Filter';

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
    <>
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
        <div className="container">
          <input
            type="text"
            className="form-control mb-3 my-3"
            placeholder="Search..."
          />

          <div className="row">
            <div className="col bg-auto justify-content-md-center mx-5">
              {/* <!-- Filter --> */}
              <div className="card border border-dark shadow-lg rounded mb-4">
                <div className="card-title">
                  <h2 className="fs-2 text-center">Filter</h2>
                </div>
                <div className="card-body">
                  <div className="d-grid gap-2 px-2 d-md-block rounded text-center mx-5">
                    <p className="fs-3 text-center">Tags:</p>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Indoor
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Outdoor
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Park
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Sightseeing
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Shopping
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Restaurant
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Other
                    </button>

                    <p className="fs-3 text-center">Price:</p>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Free
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Cheap
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Moderate
                    </button>
                    <button
                      className="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Expensive
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Location Cards --> */}
          /* <h2 class="fs-2 text-center">Locations</h2>
          <div class="row">
          <LocationCardList locations={locations}/>
          </div>
          {/* <h2 class="fs-2 text-center">Locations</h2>
          <div class="row">
            {locations.map((item, index) => (
              <div key={index} className="col-12 col-lg-4 col-xl-3 my-3">
                <div className="card rounded">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-title">{item.title}</p>
                    <div>
                      <ul className="list-group">
                        <li className="list-group-item description">
                          {item.description}
                        </li>
                        <li className="list-group-item tags">{item.tags}</li>
                        <li className="list-group-item price">{item.price}</li>
                        <li className="list-group-item address">
                          {item.address}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    className="btn like-btn"
                    onClick={() => handleLike(item)}
                  >
                    ♥
                  </button>
                </div>
              </div> */}
            {/* ))} */}

            {/* <div class="col-12 col-lg-4 col-xl-3 my-3">
              <div class="card rounded">
                <img
                  src="./assets/img/arboretum.jpg"
                  alt="Washington Park Arboretum"
                  class="card-img-top"
                />
                <div class="card-body">
                  <p class="card-title">Washington Park Arboretum</p>
                  <div>
                    <ul class="list-group">
                      <li class="list-group-item description">
                        A variety of amazing gardens with different cultural
                        displays
                      </li>
                      <li class="list-group-item tags">
                        Tags: Sightseeing, Outdoor
                      </li>
                      <li class="list-group-item price">Price: Free</li>
                      <li class="list-group-item address">
                        2300 Arboretum Dr E, Seattle, WA 98112
                      </li>
                    </ul>
                  </div>
                </div>
                <button class="btn like-btn">♥</button>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </main>
      <footer>
        <p className="copy-right-notes">
          Copyright &copy; Created by
          <a href="elsascol@uw.edu">elsascol@uw.edu</a>
          <a href="cch0223@uw.edu">cch0223@uw.edu</a>
          <a href="zli2003@uw.edu">zli2003@uw.edu</a>. 2024
        </p>
      </footer>
    </>
  );
}

function LocationCard(props){
    const item = props.location;
    console.log(item);
    const keyVal = props.keyVal;
    return(
    <div key={keyVal} className="col-12 col-lg-4 col-xl-3 my-3">
                <div className="card rounded">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-title">{item.title}</p>
                    <div>
                      <ul className="list-group">
                        <li className="list-group-item description">
                          {item.description}
                        </li>
                        <li className="list-group-item tags">{item.tags}</li>
                        <li className="list-group-item price">{item.price}</li>
                        <li className="list-group-item address">
                          {item.address}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    className="btn like-btn"
                    // onClick={() => handleLike(item)}
                  >
                    ♥
                  </button>
                </div>
              </div>
    );
}

function LocationCardList(props){
  const locations = props.locations;
  const locationList = locations.map((location, index) => {
    return(<LocationCard location={location} keyVal={index}/>);
  })
  return (
    <section className = "LocationCardList">
      {locationList}
    </section>
  );
}


