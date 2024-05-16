import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import img1 from "./public/img/gas-works-park.jpeg";
import img2 from "./public/img/e675d232-e8d2-40b1-9f10-e7443fb6dbf2.avif";
import img3 from "./public/img/seattle_art_museum.jpg";
import img4 from "./public/img/pike_place_market-seattle-washington-public_market.jpeg";
import img5 from "./public/img/bellevue-square-center.jpg";
import img6 from "./public/img/Ivars.jpg";
import img7 from "./public/img/canlis.jpg";
import img8 from "./public/img/GameWorks-Seattle.jpg";
import img9 from "./public/img/woodland-park-zoo.jpg";
import img10 from "./public/img/arboretum.jpg";

function Homepage() {
    const locations = [
        {
          imageSrc: img1,
          title: "Gas Works Park",
          description: "A beautiful park made from a repurposed industrial area",
          tags: "Tags: Park, Outdoor",
          price: "Price: Free",
          address: "2101 Northlake Way, WA 98103",
        },
        {
          imageSrc: img2,
          title: "Space Needle",
          description: "View the downtown area & eat at the Space Needle",
          tags: "Tags: Sightseeing, Restaurant",
          price: "Price: Moderate",
          address: "400 Broad St, Seattle, WA 98109",
        },
        {
          imageSrc: img3,
          title: "Seattle Art Museum",
          description: "Local Seattle museum, houses premier art collections",
          tags: "Tags: Sightseeing, Indoor",
          price: "Price: Cheap",
          address: "1300 1st Ave, Seattle, WA 98101",
        },
        {
          imageSrc: img4,
          title: "Pike Place Market",
          description: "Most Tourist Visited, popular for seafoods",
          tags: "Tags: Outdoor, Shopping",
          price: "Price: Free",
          address: "85 Pike St, Seattle, WA 98101",
        },
        {
          imageSrc: img5,
          title: "Bellevue Square Center",
          description: "Over 200 retail stores, extensive shopping area",
          tags: "Tags: Shopping, Indoor",
          price: "Price: Moderate",
          address: "575 Bellevue Square, Bellevue, WA 98004",
        },
        {
          imageSrc: img6,
          title: "Ivars",
          description: "Delicious fish and chips served next to the Puget Sound",
          tags: "Tags: Restaurant, Outdoor",
          price: "Price: Moderate",
          address: "1001 Alaskan Wy Ste. 102, Seattle, WA 98104",
        },
        {
          imageSrc: img7,
          title: "Canlis",
          description: "Extremely fine dining with wonderful views",
          tags: "Tags: Restaurant, Indoor",
          price: "Price: Expensive",
          address: "2576 Aurora Ave N, Seattle, WA 98109",
        },
        {
          imageSrc: img8,
          title: "Gameworks Arcade",
          description: "A refurbished arcade with a variety of games to choose from.",
          tags: "Tags: Other, Indoor",
          price: "Price: Moderate",
          address: "2576 Aurora Ave N, Seattle, WA 98109",
        },
        {
          imageSrc: img9,
          title: "Woodland Park Zoo",
          description: "An fun zoo and aquarium housing many wonderful animals",
          tags: "Tags: Sightseeing, Outdoor",
          price: "Price: Moderate",
          address: "2576 Aurora Ave N, Seattle, WA 98109",
        },
        {
          imageSrc: img10,
          title: "Washington Park Arboretum",
          description: "A variety of amazing gardens with different cultural displays",
          tags: "Tags: Sightseeing, Outdoor",
          price: "Price: Free",
          address: "2300 Arboretum Dr E, Seattle, WA 98112",
        }
      ];

  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const storedLikedItems = localStorage.getItem("likedItems");
    if (storedLikedItems) {
      setLikedItems(JSON.parse(storedLikedItems));
    }
  }, []);

  const handleLike = (item) => {
    const updatedLikedItems = [...likedItems, item];
    setLikedItems(updatedLikedItems);
    localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
  };

  return (
    <>
      <header>
        <h1 class="my-0 py-0 bg-light">Homepage - Seattle best locations</h1>

        <nav class="navbar navbar-expand-lg bg-light navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Seattle is FUN!
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation bar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
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
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div class="container">
          <input
            type="text"
            class="form-control mb-3 my-3"
            placeholder="Search..."
          />

          <div class="row">
            <div class="col bg-auto justify-content-md-center mx-5">
              {/* <!-- Filter --> */}
              <div class="card border border-dark shadow-lg rounded mb-4">
                <div class="card-title">
                  <h2 class="fs-2 text-center">Filter</h2>
                </div>
                <div class="card-body">
                  <div class="d-grid gap-2 px-2 d-md-block rounded text-center mx-5">
                    <p class="fs-3 text-center">Tags:</p>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Indoor
                    </button>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Outdoor
                    </button>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Park
                    </button>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Sightseeing
                    </button>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Shopping
                    </button>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Restaurant
                    </button>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Other
                    </button>

                    <p class="fs-3 text-center">Price:</p>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Free
                    </button>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Cheap
                    </button>
                    <button
                      class="btn btn-outline-success"
                      type="button"
                      data-bs-toggle="button"
                    >
                      Moderate
                    </button>
                    <button
                      class="btn btn-outline-success"
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
          <h2 class="fs-2 text-center">Locations</h2>
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
              </div>
            ))}

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
          </div>
        </div>
      </main>
      <footer>
        <p class="copy-right-notes">
          Copyright &copy; Created by
          <a href="elsascol@uw.edu">elsascol@uw.edu</a>
          <a href="cch0223@uw.edu">cch0223@uw.edu</a>
          <a href="zli2003@uw.edu">zli2003@uw.edu</a>. 2024
        </p>
      </footer>
    </>
  );
}
