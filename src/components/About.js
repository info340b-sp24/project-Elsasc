import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'
import AboutDescriptions from '../data/AboutDescriptions.json'

export function AboutPage(props) {
    const aboutSections = AboutDescriptions;

    const aboutSectionButtons = aboutSections.map((section, index) => {
        let margin = "mb-3";
        console.log(aboutSections.length)
        if (index === aboutSections.length - 1){
            margin = "mb-5"
        }

        return(
        <div key={index} className={"border rounded border-dark p-2 " + margin} style={{ backgroundColor: "#4682B4" }}>
            <h2>{section.title}</h2>
            <Link className="text-dark" to={"/learn-more/" +  section.pageId }>Click to learn more</Link>
        </div>
        )
    });


    return (
        <div style={{ backgroundColor: "#B0E0E6", height: "100%"}}>
            <h1>Welcome to Seattle</h1>
            <div className="d-flex flex-column mx-5">
                <div className="p-2 mb-3"><SlideShow /></div>        
                {aboutSectionButtons}
            </div>
        </div>
    );
}


function SlideShow() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="img-fluid border rounded border-dark" alt="Gas Works" src="./img/slides-pexels-amanda-grove-138115-419235.jpg"/>
                <Carousel.Caption>
                    <h2>Pike Place Market</h2>
                    <p>Seattles most famous market</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="img-fluid border rounded border-dark" alt="Pike Place" src="./img/slides-pexels-kelly-1179532-13766339.jpg" />
                <Carousel.Caption>
                    <h2>Seattle Wharf</h2>
                    <p>The beautiful Seattle Waterfront home of the Seattle Great Wheel!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="img-fluid border rounded border-dark" alt="Gas Works" src="./img/slides-pexels-radtacomadad-23749815.jpg" />
                <Carousel.Caption>
                    <h2>Gum Wall</h2>
                    <p >
                        The famous (and slightly gross) gum wall!
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
