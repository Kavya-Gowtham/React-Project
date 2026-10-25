import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : {onlineStatus === true ? " 🟢 Online" : " 🔴 Offline"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {/** Link doesn't reload entire page as href, it just changes the  component under header component*/}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to= "/contact">Contact Us</Link>
            </li>
             <li>
            <Link to= "/grocery">Grocery</Link>
            </li>
          <li>Cart</li> 
        </ul>
      </div>
    </div>
  );
};

export default Header;