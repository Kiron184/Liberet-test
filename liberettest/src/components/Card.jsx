import React from "react";
import clock from "../utils/clock.png";
import "../styles/styles.css";

export default function Card() {
  let strMeal = "caldo de pollo";
  let strArea = "banquete providencia";
  let strTags = "quedan 5";
  let price = "$79.00";
  let img =
    "https://www.recetaslamasia.es/wp-content/uploads/2012/10/foto_plato-equilibrado-scaled.jpg";

  return (
    <div className="Card bg-primary">
      <img className="Dish" src={img} alt="Dish" />
      <div className="Info">
        <p className="strMeal">{strMeal}</p>
        <p className="strArea">{strArea}</p>
        <p className="strTags">{strTags}</p>
        <p className="price">{price}</p>
      </div>

      <img className="Clock" src={clock} alt="Clock" />
    </div>
  );
}
