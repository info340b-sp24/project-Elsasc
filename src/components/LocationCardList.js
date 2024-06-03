import { useEffect } from "react";

import { getDatabase, ref, set, get, update } from "firebase/database";
import app from "../firebaseConfig";


function LocationCard(props){
    const item = props.location;

    async function handleLike(key, isLiked, elem){
      const db = getDatabase(app)
        const dbref = ref(db, "locations/"+key)
        if(isLiked){
          update(dbref, {
            isLiked: false
          }).then(()=> elem.classList.toggle("liked")).catch((e)=> alert("Failed"))
        }else{
          update(dbref, {
            isLiked: true
          }).then(()=>  elem.classList.toggle("liked")).catch((e)=> alert("Failed"))
        }        
    }
    const keyVal = props.keyVal;
    const tagsList = item.tags.map((tag) => {
      return (<li className="list-group-item tag" key={tag}>{tag}</li>);
    });
    // console.log(item.tags)
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
                    className={props.location.isLiked ? "btn like-btn liked" : "btn like-btn"}
                    onClick={(e) => handleLike(item.objectKey, props.location.isLiked, e.target)}
                  >
                    ♥
                  </button>
                </div>
      </div>
    );
}

export function LocationCardList(props){

  useEffect(()=>{
    // console.log("you have changed something")
  }, [props.searchQ])

  const mySearchQ = props.filterSearchQ.toLowerCase()
  const myPrice = props.filterPrice.toLowerCase()
  const myTag = props.filterTag
  const locations = props.locations;

  const filterSearch = locations.filter((item)=> {
    return mySearchQ === '' ? item : item.title.toLowerCase().includes(mySearchQ)
  })

  const filterTag = filterSearch.filter((item)=> {
    return myTag === 'All' ? item : item.tags.includes(myTag)
  })

  const filterPrice = filterTag.filter((item)=> {
    return myPrice === 'all' ? item : item.price.toLowerCase().includes(myPrice)
  })
    const locationList = filterPrice.map((location, index) => {
        return(<div key={index}>
          <LocationCard location={location} keyVal={index} key={index}/>
          </div>);        
    })
    return (
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
        {locationList}
      </div>
    );
  
}