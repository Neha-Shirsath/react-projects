import ResCard from "./restaurantCard";
import resList from "../utils/mockData";

const Appbody = () => {
    return (
        <div className="app-body">
            <div className="searching">
                <div className="search-container"> <input className="search" id="search" type="text" placeholder="Search" /></div>
            <div className="filter">
                <button className="top-res" onClick={() => {
                    console.log(resList.filter((res) => res.info.rating.aggregate_rating > 4 ))

                    
                }}>Top Restaurants</button>
            </div>
            </div>
              <div className="res-container">
                {
                  resList.map((restaurant) => (<ResCard key={restaurant.info.resId} resData = {restaurant}/>))
                }
              </div>
        </div>
    )
}

export default Appbody;