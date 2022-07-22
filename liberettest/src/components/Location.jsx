import React from "react";
import location from "../utils/location.png";
import menu from "../utils/menu1.png";

export default function Location() {
  return (
    <div className="d-flex pt-5 px-5">
      <img src={location} alt="location" width="30" height="30" />
      <button
        className="w-100 border-0 bg-white font-weight-bold"
        onClick={(e) => alert("Select Location")}
      >
        Select Location...
      </button>
      <img src={menu} alt="location" width="30" height="30" />
    </div>
  );
}
