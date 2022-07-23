import React from "react";
import cart from "../utils/cart.png";
import profile from "../utils/profile.png";
import menu from "../utils/menu.png";
import "../styles/styles.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  // console.log(window.location.href);

  // if (window.location.href === "http://localhost:3000/profile") {
  // }

  // if (window.location.href === "http://localhost:3000/") {
  // }

  // if (window.location.href === "http://localhost:3000/cart") {
  // }

  return (
    <div>
      <div className="Chips w-100 d-flex p-3 justify-content-center my-auto fixed-bottom">
        <NavLink to="/cart">
          <img
            className="mx-5"
            src={cart}
            alt="location"
            width="30"
            height="30"
          />
        </NavLink>
        <NavLink to="/">
          <img
            className="mx-5"
            src={menu}
            alt="location"
            width="30"
            height="30"
          />
        </NavLink>
        <NavLink to="/profile">
          <img
            className="mx-5"
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
