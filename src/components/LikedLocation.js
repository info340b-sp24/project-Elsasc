import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
import { LocationCardList } from "./LocationCardList";

export function LikedLocation(props) {
    const likedLocationList = props.LikedLocationList
    return (
        <html className='liked-locations' lang='en'>
            <head>
                <meta charSet="utf-8"></meta>
                <meta name="author" content="Cole Elsasser, Brian Chiang, Vincent Li"></meta>
                <meta name="description" content="Liked locations by the user"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel="icon" type="image/x-icon" href="img/space-needle-icon.png"></link>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>

                <link rel="stylesheet" href="css/style.css"></link>
                <title>Seattle is FUN! Liked Locations</title>
            </head>
            <body className="home-page">

                <main>
                <h1 className="fs-2 text-start"> Locations you liked </h1>
                <div className="container">
                    <LocationCardList locations={likedLocationList} />
                </div>
                </main>
            </body>

        </html>
    );
}


//  Interactivity testing (work in progress)


// export function LikedLocation(props) {
//   const [likedItems, setLikedItems] = useState([]);

//   useEffect(() => {
//     const storedLikedItems = localStorage.getItem("likedItems");
//     if (storedLikedItems) {
//       setLikedItems(JSON.parse(storedLikedItems));
//     }
//   }, []);

//   const handleDelete = (index) => {
//     const updatedLikedItems = [...likedItems];
//     updatedLikedItems.splice(index, 1);
//     setLikedItems(updatedLikedItems);
//     localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
//   };

//   return (
//     <>
//       <header>
//         <h1 class="my-0 py-0 bg-light">Liked Locations</h1>

//         <nav class="navbar navbar-expand-lg bg-light navbar-light">
//           <div class="container-fluid">
//             <a class="navbar-brand" href="/">
//               Seattle is FUN!
//             </a>
//             <button
//               class="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNav">
//               <ul class="navbar-nav">
//                 <li class="nav-item">
//                   <Link class="nav-link active" aria-current="page" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link" to="/">
//                     Quiz
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link" to="/">
//                     Timeline
//                   </Link>
//                 </li>
//                 <li class="nav-item">
//                   <Link class="nav-link" to="/likedLocation">
//                     Liked Locations
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <main>
//         <div class="container">
//           <input
//             type="text"
//             class="form-control mb-3 my-3"
//             placeholder="Search..."
//           />

//           <h2 class="fs-2 text-center">Locations you liked</h2>
//           <div className="row">
//             {likedItems.map((item, index) => (
//               <div key={index} className="col-12 col-lg-4 col-xl-3 my-3">
//                 <div className="card rounded">
//                   <img
//                     src={item.imageSrc}
//                     alt={item.title}
//                     className="card-img-top"
//                   />
//                   <div className="card-body">
//                     <p className="card-title">{item.title}</p>
//                     <div>
//                       <ul className="list-group">
//                         <li className="list-group-item description">
//                           {item.description}
//                         </li>
//                         <li className="list-group-item tags">{item.tags}</li>
//                         <li className="list-group-item price">{item.price}</li>
//                         <li className="list-group-item address">
//                           {item.address}
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <button
//                     className="btn like-btn"
//                     onClick={() => handleDelete(index)}
//                   >
//                     x
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//       <footer>
//         <p class="copy-right-notes">
//           Copyright &copy; Created by
//           <a href="elsascol@uw.edu">elsascol@uw.edu</a>
//           <a href="cch0223@uw.edu">cch0223@uw.edu</a>
//           <a href="zli2003@uw.edu">zli2003@uw.edu</a>. 2024
//         </p>
//       </footer>
//     </>
//   );
// }
