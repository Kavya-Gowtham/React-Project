import React from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_ADfR3Rj9bChsD6JGjhn6wwT9acljmhtunOs56kuaw&s=10"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li> 
        </ul>
      </div>
    </div>
  );
};

export default Header;