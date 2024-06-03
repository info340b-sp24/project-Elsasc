import Carousel from 'react-bootstrap/Carousel';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'


export function AboutPage() {
    const aboutSections = ["About Us", "Our Mission", "Seattle Fun Facts"]

    const aboutSectionButtons = aboutSections.map((section) => {
        <div className="p-2" style={{ backgroundColor: "#00B1E1" }}>
            <h2>{section}</h2>
            <Link to={"/about/" + { section }}>Click to learn more</Link>
        </div>
    });


    return (
        <div>
            <h1>Welcome to Seattle</h1>
            {/* <div class="d-flex bd-highlight">
        <div class="p-2 w-100 bd-highlight"> <SlideShow/></div>
        <div class="p-2 flex-shrink-1 bd-highlight">Flex item</div>
        </div> */}
            <div className="d-flex flex-column mx-5">
                <div className="p-2 mb-3"><SlideShow /></div>
                <div className="p-2 mb-3" style={{ backgroundColor: "#00B1E1" }}>
                    <h2>About Us</h2>
                    <Link to="/about/about-us">Click to learn more</Link>
                </div>
                <div className="p-2 mb-3" style={{ backgroundColor: "#00B1E1" }}>
                    <h2>Our Mission</h2>
                    <Link to="/about/mission">Click to learn more</Link>
                </div>
                <div className="p-2 mb-5" style={{ backgroundColor: "#00B1E1" }}>
                    <h2>Seattle Fun Facts</h2>
                    <Link to="/about/fun-facts">Click to learn more</Link>
                </div>
                {/* {aboutSectionButtons} */}

            </div>


        </div>
    );
}


function SlideShow() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="img-fluid" alt="Gas Works" src="./img/gas-works-park.jpeg" />
                <Carousel.Caption>
                    <h2>Gas Works</h2>
                    <p>A beautiful local park</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="img-fluid" alt="Pike Place" src="./img/pike_place_market-seattle-washington-public_market.jpeg" />
                <Carousel.Caption>
                    <h2>Pike Place Market</h2>
                    <p>Seattles most famous market</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="img-fluid" alt="Gas Works" src="./img/gas-works-park.jpeg" />
                <Carousel.Caption>
                    <h2>Third slide label</h2>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

// function aboutObjects(props) {
//     const aboutSections = props.aboutSections
//     return (
//         <div className="p-2" style={{ backgroundColor: "#00B1E1" }}>
//             <h2>Flex item 2</h2>
//             <p>Learn more about our site! </p>
//             <Link className="btn btn-primary" to={"/about/" + }>Meet {pet.name}</Link>
//         </div>
//     );


// }
