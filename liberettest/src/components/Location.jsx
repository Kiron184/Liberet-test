import React from "react";
import location from "../utils/location.png";
import menu from "../utils/menu1.png";
import Swal from "sweetalert2";

export default function Location() {
  return (
    <div className="Z-in d-flex pt-5 px-5">
      <img src={location} alt="location" width="40" height="40" />
      <div
        style={{ outline: "0" }}
        className="w-100 border-0 bg-white font-weight-bold px-5 h4"
        onClick={(e) => {
          Swal.fire({
            title: "Selecciona una Locación!",
            icon: "warning",
            confirmButtonColor: "#FCAB3F",
            confirmButtonText: "OK!",
          });
        }}
      >
        Select Location...
      </div>
      <img src={menu} alt="location" width="40" height="40" />
    </div>
  );
}
