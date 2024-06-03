import Carousel from 'react-bootstrap/Carousel';


export function AboutPage(){
    return(
        <div>
        <h1>About US</h1>
        <div className="d-flex p-2 bd-highlight">
            <SlideShow/>
        </div>
        </div>
    );
}


function SlideShow() {
    return (
      <Carousel>
        <Carousel.Item>
          <img alt="Gas Works" src="./img/gas-works-park.jpeg"/>
          <Carousel.Caption>
            <h3>Gas Works</h3>
            <p>A beautiful local park</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img alt="Pike Place" src="./img/pike_place_market-seattle-washington-public_market.jpeg"/>
          <Carousel.Caption>
            <h3>Pike Place Market</h3>
            <p>Seattles most famous market</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img alt="Gas Works" src="./img/gas-works-park.jpeg"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  

