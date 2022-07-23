import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const date = useSelector((state) => state.date);
  return (
    <div>
      <label className="form-control form-control-lg">
        Día Seleccionado:
        {" " + date[0]?.day?.day + " " + date[0]?.day?.date}
      </label>
      <label className="form-control form-control-lg">
        Período Seleccionado:
      </label>
      <label className="form-control form-control-lg">
        Categoría Seleccionada:
      </label>
    </div>
  );
}
