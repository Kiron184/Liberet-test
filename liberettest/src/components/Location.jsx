import React from "react";
import location from "../utils/location.png";
import menu from "../utils/menu1.png";

export default function Location() {
  return (
    <div className="d-flex pt-5 px-5">
      <img src={location} alt="location" width="30" height="30" />
      <div
        style={{ outline: "0" }}
        className="w-100 border-0 bg-white font-weight-bold px-5"
        onClick={(e) => alert("Select Location")}
      >
        Select Location...
      </div>
      <img src={menu} alt="location" width="30" height="30" />
    </div>
  );
}
