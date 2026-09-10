import resList from "../utils/mockData"

const ResCard = (props) => {
    const {resData} = props

    const {image, name, cuisine, rating, locality } = resData?.info

    return (
        <div className="res-card">
            <img className="dosa-cafe" alt="cuisine" src={image.url}/>
            <h3>{name}</h3>
            <p>{cuisine.map((item) => item.name).join(", ")}</p>
            <h4>⭐{rating.aggregate_rating}</h4>
            <p>{locality.name}</p>
        </div>
    )
}

export default ResCard;