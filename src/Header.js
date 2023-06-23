import React from "react";
import "./Header.css";
import logo from "D:/WEB DEVELOPMENT/amazonClone/amazon-clone/src/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo} alt="Logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header_option">
            <div className="header_option">
              <span className="haeder_optionLineOne">Returns</span>
              <span className="haeder_optionLineTwo">& Orders</span>
            </div>
          </div>
        </Link>

        <div className="header_option">
          <div className="header_option">
            <span className="haeder_optionLineOne">Your</span>
            <span className="haeder_optionLineTwo">Prime</span>
          </div>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
