import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function Cards() {
  let API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

  let [categories, setCategories] = useState([]);
  let [meals, setMeals] = useState([]);
  let categorias = [];
  let categoriasfinal = [];

  function getCategories() {
    axios
      .get(API_URL)
      .then((response) => {
        setCategories(response?.data?.categories);
      })
      .catch(console.log);
  }

  categories.map((cat) => {
    categorias.push(cat?.strCategory);
    return "";
  });

  Promise.all(
    categorias?.map(async (cat) => {
      return await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
      ).then((response) =>
        axios.get(response.url).then((resp) => {
          categoriasfinal.push(resp.data.meals);
          //console.log(categoriasfinal);
        })
      );
    })
  );

  useEffect(() => {
    getCategories();
    getMeals();
  }, []);

  function getMeals() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
      .then((response) => {
        setMeals(response?.data?.meals);
      })
      .catch(console.log);
  }

  return (
    <div className="Cards">
      <div className="row">
        {meals?.map((meal) => {
          return (
            <div key={meal.idMeal} className="col p-0 Card">
              <Card meal={meal} />
            </div>
          );
        })}
      </div>
      <div style={{ height: "30px" }}></div>
    </div>
  );
}
