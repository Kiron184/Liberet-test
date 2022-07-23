import React from "react";
import cutlery from "../utils/cutlery.png";
import clock from "../utils/clock.png";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Chips() {
  let [period, setPeriod] = useState("11:00 am - 12:00 am");
  let [servicio, setServicio] = useState("Cocina Industrial");

  function handleTimePeriod(e) {
    e.preventDefault(e);

    // document.getElementById(e.target.name).innerHTML = "11:00 am - 12:00 am";
    // document.getElementById(e.target.name).innerHTML = "1:00 pm - 2:00 pm";
    // document.getElementById(e.target.name).innerHTML = "2:00 pm - 3:00 pm";
  }

  function handleService(e) {
    e.preventDefault(e);
  }

  function handleSwall(e) {
    Swal.fire({
      title: "+1 Platillo!",
      text: "Agregaste un Platillo!",
      icon: "warning",
      confirmButtonColor: "#FCAB3F",
      confirmButtonText: "OK!",
    });
  }

  return (
    <>
      <div className="w-100 d-flex p-2 justify-content-around my-auto Chips">
        <div className="d-flex">
          <button
            style={{ outline: "0" }}
            className="border-0 bg-white font-weight-bold chipButton"
            name="period"
            id="period"
            onClick={(e) => handleTimePeriod(e)}
          >
            <img
              src={clock}
              alt="cutlery"
              width="30"
              height="30"
              className="ChipImage"
            />
            {period}
          </button>
        </div>

        <div className="d-flex">
          <button
            style={{ outline: "0" }}
            className="border-0 bg-white font-weight-bold chipButton"
            name="service"
            id="service"
            onClick={(e) => handleService(e)}
          >
            <img
              src={cutlery}
              alt="cutlery"
              width="30"
              height="30"
              className="ChipImage"
            />
            {servicio}
          </button>
        </div>

        <div className="d-flex">
          <button
            style={{ outline: "0" }}
            className="d-flex border-0 bg-white font-weight-bold chipButton"
            onClick={(e) => handleSwall(e)}
          >
            <p className="masUno">+1</p>
            Platillos
          </button>
        </div>
      </div>
    </>
  );
}
