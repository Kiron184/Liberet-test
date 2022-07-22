import React from "react";

export default function Calendar() {
  let Calendar = [
    { day: "Dom", date: "28" },
    { day: "Lun", date: "29" },
    { day: "Mar", date: "30" },
    { day: "Mié", date: "01" },
    { day: "Jue", date: "02" },
    { day: "Vie", date: "03" },
    { day: "Sáb", date: "04" },
  ];
  function handleClick(e) {
    e.preventDefault(e);
    let name = e.target.name;
    console.log(name);
    //document.getElementById(name).classList.add("bg-warning");
  }
  return (
    <>
      <hr />
      <div className="w-100 d-flex mt-1 justify-content-center">
        {Calendar.map((e) => (
          <button
            className="mx-4 border-0 bg-white"
            name={e.day}
            key={e.day}
            onClick={(e) => handleClick(e)}
          >
            <h5 className="font-weight-bold">{e.day}</h5>
            <h5 id={e.day} className="rounded-circle">
              {e.date}
            </h5>
          </button>
        ))}
      </div>
    </>
  );
}
