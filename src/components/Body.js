import React, { useState, useEffect } from "react";
import RestoCard from "./RestoCard";
// import { restaurantList } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () =>{
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const jsonData = await response?.json();

    setListOfRestaurants(jsonData?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurants(jsonData?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  return (
    <div className="body">
      {onlineStatus === false ? <h1> You're Offline, Please check your internet access</h1> :
      <>
    <div className="filter">
      <div className="search">
        <input
          type="text"
          value={searchText}
          placeholder="Search restaurants"
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button onClick={() =>{

          //filter the restaurant cards based on search text and update UI
          const filteredList = listOfRestaurants.filter((restaurant) => {
               return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        });
           setFilteredRestaurants(filteredList);

        }}>Search</button>
      </div>
      <button className="filter-btn" onClick={()=>{
        const topList = listOfRestaurants.filter((restaurant)=> restaurant.info.avgRating > 4);
        setFilteredRestaurants(topList)
      }}>
        Top Rated Restaurants

      </button>
      </div>
      <div className="resto-container">
        {filteredRestaurants.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <RestoCard restaurant = {restaurant} />
            </Link>
        ))}
      </div>
      </>
      } 
    </div>
  );
};

export default Body;