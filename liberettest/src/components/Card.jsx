import React, { useState, useEffect } from "react";
import axios from "axios";
import clock from "../utils/clock.png";
import "../styles/styles.css";

export default function Card({ meal }) {
  let strMeal = meal.strMeal;
  let idMeal = meal.idMeal;

  let [strArea, setStrArea] = useState([]);
  let [img, setImg] = useState("");
  let [strTags, setStrTags] = useState("");

  function getMeals() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then((response) => {
        setStrArea(response?.data?.meals[0]?.strArea);
        setImg(response?.data?.meals[0]?.strMealThumb);
        setStrTags(response?.data?.meals[0]?.strTags?.split(",")[0]);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getMeals();
  }, []);

  let price = idMeal;

  return (
    <div className="Card">
      <img className="Dish mx-auto" src={img} alt="Dish" />
      <p className="strMeal">
        {strMeal.length < 30 ? strMeal : strMeal.slice(0, 27) + "..."}
      </p>
      <p className="strArea">{strArea}</p>
      <p className="strTags" id={idMeal}>
        {strTags
          ? strTags
          : document.getElementById(idMeal)?.classList.add("d-none")}
      </p>
      <p className="price">{price}</p>
      <img className="Clock" src={clock} alt="Clock" />
    </div>
  );
}
