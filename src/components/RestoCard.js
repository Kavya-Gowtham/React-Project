import { IMG_CDN_URL } from "../utils/constant.js";
const RestoCard = ({ restaurant }) => {
  console.log("restau",restaurant.info)
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = restaurant?.info;

  return (
    <div className="resto-card">
      <img className="resto-img" alt={name} src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestoCard;