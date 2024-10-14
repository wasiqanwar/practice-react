import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantsData } = props;

  // console.log(restaurantsData);

  const { name, cuisines, avgRating, sla, cloudinaryImageId } =
    restaurantsData?.card.card.info;

  return (
    <div className="restaurant-card">
      <img
        className="res-card-logo"
        alt="Restaurant Logo"
        src={RES_IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
