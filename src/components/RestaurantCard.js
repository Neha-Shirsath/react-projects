import { IMG_URL } from "../utils/constants.js";

const ResCard = (props) => {
    const {resData} = props

    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, locality } = resData?.info;

    return (
        <div className="res-card">
            <img className="dosa-cafe" alt="cuisine" src={IMG_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h4>{costForTwo}</h4>
            <h4>⭐{avgRating}</h4>
            <p>{locality}</p>
        </div>
    )
}

export default ResCard;