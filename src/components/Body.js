import ResCard from "./restaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Appbody = () => {

    const [listOfRes, setListOfRes] = useState(resList);
    
    return (
        <div className="app-body">
            <div className="searching">
                <div className="search-container"> <input className="search" id="search" type="text" placeholder="Search for restaurant, cuisine or a dish" /></div>
            <div className="filter">
                <button className="top-res" onClick={() => { 
                    const filteredList = listOfRes.filter((res) => (res.info.rating.aggregate_rating > 4));
                    setListOfRes(filteredList);
                }}>Top Restaurants</button>
            </div>
            </div>
              <div className="res-container">
                {
                  listOfRes.map((restaurant) => (<ResCard key={restaurant.info.resId} resData = {restaurant}/>))
                }
              </div>
        </div>
    )
}

export default Appbody;