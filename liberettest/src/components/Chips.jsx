import React from "react";
import cutlery from "../utils/cutlery.png";
import clock from "../utils/clock.png";
import { useState } from "react";

export default function Chips() {
  let [servicio, setServicio] = useState("Cocina Industrial");

  function handleService(e) {
    e.preventDefault(e);
  }

  function handleTimePeriod(e) {
    e.preventDefault(e);
  }

  return (
    <>
      <div className="w-100 d-flex p-2 justify-content-around my-auto Chips">
        <div className="d-flex">
          <button
            className="w-100 border-0 bg-white font-weight-bold chipButton"
            onClick={(e) => handleTimePeriod(e)}
          >
            <img src={clock} alt="cutlery" width="30" height="30" />
            {servicio}
          </button>
        </div>

        <div className="d-flex">
          <button
            className="w-100 border-0 bg-white font-weight-bold chipButton"
            onClick={(e) => handleService(e)}
          >
            <img src={cutlery} alt="cutlery" width="30" height="30" />
            {servicio}
          </button>
        </div>

        <div className="d-flex">
          <button
            className="w-100 border-0 bg-white font-weight-bold chipButton"
            onClick={(e) => alert("+1 Platillo")}
          >
            <p className="masUno">+1</p>
            Platillo
          </button>
        </div>
      </div>
    </>
  );
}
