import React from "react";
import cutlery from "../utils/cutlery.png";
import clock from "../utils/clock.png";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectPeriod, selectCategorie, selectService } from "../actions";

export default function Chips() {
  function handleTimePeriod(e) {
    e.preventDefault(e);
    let modalBG = document.querySelector(".Modal-bg-period");
    modalBG.classList.add("Modal-bg-active");
  }

  function handleCategorieSelected(e) {
    e.preventDefault();
    dispatch(selectService(e.target.value));
    let modalBG = document.querySelector(".Modal-bg-service");
    modalBG.classList.remove("Modal-bg-active");
  }
  function handleService(e) {
    e.preventDefault(e);
    let modalBG = document.querySelector(".Modal-bg-service");
    modalBG.classList.add("Modal-bg-active");
    getCategories();
  }

  function handleClose(e, str) {
    e.preventDefault(e);
    if (str === "p") {
      let modalBG = document.querySelector(".Modal-bg-period");
      modalBG.classList.remove("Modal-bg-active");
    }
    if (str === "s") {
      let modalBG = document.querySelector(".Modal-bg-service");
      modalBG.classList.remove("Modal-bg-active");
    }
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

  const dispatch = useDispatch();
  const periodSelected = useSelector((state) => state.period);

  function handlePeriod(e) {
    e.preventDefault();
    dispatch(selectPeriod(e.target.value));
    let modalBG = document.querySelector(".Modal-bg-period");
    modalBG.classList.remove("Modal-bg-active");
  }

  const serviceSelected = useSelector((state) => state.service);
  const categorieSelected = useSelector((state) => state.categorie);

  function getCategories() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        return dispatch(selectCategorie(response?.data?.categories));
      })
      .catch(console.log);
  }

  useEffect(() => {
    getCategories();
  }, []);

  let flatCat = categorieSelected.flat();

  return (
    <>
      <div className=" Z-in w-100 d-flex p-2 justify-content-around my-auto Chips">
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
            {periodSelected}
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
            {serviceSelected}
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

        <div className="Modal-bg-period">
          <div className="Modal-period">
            <img className="Modal-clock" alt="clock" src={clock}></img>
            <label className="Modal-label-period">
              Elige un horario de entrega
            </label>
            <button
              style={{ outline: "0" }}
              className="Modal-button-period"
              value={"11:00 am - 12:00 am"}
              onClick={(e) => handlePeriod(e)}
            >
              11:00 am - 12:00 am
            </button>
            <button
              style={{ outline: "0" }}
              className="Modal-button-period"
              value={"1:00 pm - 2:00 pm"}
              onClick={(e) => handlePeriod(e)}
            >
              1:00 pm - 2:00 pm
            </button>
            <button
              style={{ outline: "0" }}
              className="Modal-button-period"
              value={"2:00 pm - 3:00 pm"}
              onClick={(e) => handlePeriod(e)}
            >
              2:00 pm - 3:00 pm
            </button>
            <span
              className="Modal-close-period"
              onClick={(e) => handleClose(e, "p")}
            >
              X
            </span>
          </div>
        </div>

        <div className="Modal-bg-service">
          <div className="Modal-service">
            <img className="Modal-cutlery" alt="cutlery" src={cutlery}></img>
            <label className="Modal-label-service">Elige un servicio</label>
            {flatCat?.map((c) => {
              return (
                <button
                  key={c}
                  className="Modal-button-service"
                  value={c}
                  onClick={(e) => handleCategorieSelected(e)}
                >
                  {c}
                </button>
              );
            })}

            <span
              className="Modal-close-service"
              onClick={(e) => handleClose(e, "s")}
            >
              X
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
