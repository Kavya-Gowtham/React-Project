import { useEffect } from "react";
import { FETCH_MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const {resId} = useParams();
    // console.log("resId",resId);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        // const response1 = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9304278&lng=77.678404&restaurantId=88946");
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await response?.json();
        // console.log("response",response,resId,response1)
    };

    return(
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
            </ul>

        </div>
    )
}

export default RestaurantMenu;