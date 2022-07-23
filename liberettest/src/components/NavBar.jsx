import React, { useEffect } from "react";
import cart from "../utils/cart.png";
import profile from "../utils/profile.png";
import menu from "../utils/menu.png";
import menuYellow from "../utils/menu-yellow.png";
import profileYellow from "../utils/profile-yellow.png";
import cartYellow from "../utils/cart-yellow.png";
import "../styles/styles.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  let location = useLocation();

  console.log(location.pathname);

  function currentNav() {
    if (location.pathname === "/") {
      document.getElementById("/").src = menuYellow;
      document.getElementById("/cart").src = cart;
      document.getElementById("/profile").src = profile;
    }
    if (location.pathname === "/cart") {
      document.getElementById("/").src = menu;
      document.getElementById("/cart").src = cartYellow;
      document.getElementById("/profile").src = profile;
    }
    if (location.pathname === "/profile") {
      document.getElementById("/").src = menu;
      document.getElementById("/cart").src = cart;
      document.getElementById("/profile").src = profileYellow;
    }
  }
  useEffect(() => {
    currentNav();
  }, [location]);

  return (
    <div>
      <div className="NavBar w-100 d-flex p-3 justify-content-center my-auto fixed-bottom">
        <NavLink to="/cart">
          <img
            id="/cart"
            className="mx-5 ButtonNav"
            src={cart}
            alt="location"
            width="30"
            height="30"
          />
        </NavLink>

        <NavLink to="/">
          <img
            id="/"
            className="mx-5 ButtonNav"
            src={menu}
            alt="location"
            width="30"
            height="30"
          />
        </NavLink>

        <NavLink to="/profile">
          <img
            id="/profile"
            className="mx-5 ButtonNav"
            src={profile}
            alt="location"
            width="30"
            height="30"
          />
        </NavLink>
      </div>
    </div>
  );
}
