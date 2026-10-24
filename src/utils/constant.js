export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/";

export const FETCH_MENU_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9304278&lng=77.678404&restaurantId=";

export const LOGO_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_ADfR3Rj9bChsD6JGjhn6wwT9acljmhtunOs56kuaw&s=10";

export const restaurantList = [
  {
    id: 1,
    name: "Meghana Foods",
    cloudinaryImageId:
      "https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg",
    cuisines: ["Biryani", "North Indian", "Asian"],
    avgRating: 4.4,
    sla: { deliveryTime: 40 },
  },
  {
    id: 2,
    name: "KFC",
    cloudinaryImageId:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_ADfR3Rj9bChsD6JGjhn6wwT9acljmhtunOs56kuaw&s=10",
    cuisines: ["Fast Food", "Burger", "Fries"],
    avgRating: 4.2,
    sla: { deliveryTime: 25 },
  },
  {
    id: 3,
    name: "Domino's Pizza",
    cloudinaryImageId:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    cuisines: ["Pizza", "Italian", "Desserts"],
    avgRating: 4.3,
    sla: { deliveryTime: 30 },
  },
  {
    id: 4,
    name: "Biryani House",
    cloudinaryImageId:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    cuisines: ["Biryani", "Hyderabadi", "Mughlai"],
    avgRating: 4.5,
    sla: { deliveryTime: 35 },
  },
  {
    id: 5,
    name: "Subway",
    cloudinaryImageId:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    cuisines: ["Sandwich", "Salads", "Healthy"],
    avgRating: 4.1,
    sla: { deliveryTime: 20 },
  },
  {
    id: 6,
    name: "Cafe Coffee Day",
    cloudinaryImageId:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    cuisines: ["Coffee", "Desserts", "Bakery"],
    avgRating: 4.0,
    sla: { deliveryTime: 18 },
  },
];
