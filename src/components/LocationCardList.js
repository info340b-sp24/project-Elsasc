
function LocationCard(props){
    const item = props.location;
    const handleLike = props.handleLike;
    const keyVal = props.keyVal;
    const tagsList = item.tags.map((tag) => {
      return (<li className="list-group-item tag">{tag}</li>);
    });
    console.log(item.tags)
    return(
      
      <div className="col my-5">
                <div className="card rounded border border-dark">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <p className="card-title fs-4">{item.title}</p>
                    <div>
                      <ul className="list-group">
                        <li className="list-group-item description">
                          {item.description}
                        </li>
                        <li className="list-group-item tagsList"> Tags:
                          <ul className="list-group list-group-horizontal"> 
                          {tagsList}
                          </ul>
                          </li>
                        <li className="list-group-item price">{"Price: " + item.price}</li>
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
    return(<div key={index}>
      <LocationCard location={location} keyVal={index} key={index}/>
      </div>);
      
  })
  return (
    <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
      {locationList}
    </div>
  );
}