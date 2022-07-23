import React, { useEffect, useState } from "react";
import { selectDate } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export default function Calendar() {
  const dispatch = useDispatch();
  const dated = useSelector((state) => state.date);

  let [Calendar, setCalendar] = useState([
    { day: "Dom", date: "28" },
    { day: "Lun", date: "29" },
    { day: "Mar", date: "30" },
    { day: "Mié", date: "01" },
    { day: "Jue", date: "02" },
    { day: "Vie", date: "03" },
    { day: "Sáb", date: "04" },
  ]);

  function handleClick(e, date) {
    e.preventDefault(e);
    dispatch(selectDate(date));
    Calendar.forEach((day) => {
      if (dated[0]?.day?.day === day?.day) {
        document.getElementById(day.day).classList.add("DateSelected");
      } else {
        document.getElementById(day.day).classList.remove("DateSelected");
      }
    });
  }

  useEffect(() => {});

  return (
    <>
      <hr />
      <div className="w-100 d-flex mt-1 justify-content-center">
        {Calendar?.map((day) => (
          <button
            style={{ outline: "0" }}
            className="mx-4 border-0 bg-white"
            name={day?.day}
            num={day?.date}
            key={day.day}
            onClick={(e) => handleClick(e, { day })}
          >
            <h5 className="font-weight-bold">{day.day}</h5>
            <h5 id={day.day} className="rounded-circle">
              {day.date}
            </h5>
          </button>
        ))}
      </div>
    </>
  );
}
