

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

export function LocationCardList(props){
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