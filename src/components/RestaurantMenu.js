import { useEffect } from "react";
import { FETCH_MENU_URL } from "../utils/constant";

const RestaurantMenu = () =>{

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9304278&lng=77.678404&restaurantId=88946&catalog_qa=undefined&submitAction=ENTER");
        // const json = await response?.json();
        console.log("response",response)
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