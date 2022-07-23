import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useSelector } from "react-redux/es/exports";

export default function Cards() {
  let [meals, setMeals] = useState([]);

  const serviceSelected = useSelector((state) => state.service);

  function getMeals() {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${serviceSelected[0]}`
      )
      .then((response) => {
        setMeals(response?.data?.meals);
      })
      .catch(console.log);
  }

  useEffect(() => {
    getMeals();
    getMeals();
  }, [serviceSelected]);

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
