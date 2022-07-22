import React from "react";
import cart from "../utils/cart.png";
import profile from "../utils/profile.png";
import menu from "../utils/menu.png";
import "../styles/styles.css";

export default function NavBar() {
  return (
    <div>
      <div className="Chips w-100 d-flex p-3 justify-content-center my-auto fixed-bottom">
        <img
          className="mx-5"
          src={cart}
          alt="location"
          width="30"
          height="30"
        />
        <img
          className="mx-5"
          src={profile}
          alt="location"
          width="30"
          height="30"
        />
        <img
          className="mx-5"
          src={menu}
          alt="location"
          width="30"
          height="30"
        />
      </div>
    </div>
  );
}
