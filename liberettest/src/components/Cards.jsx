import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="w-75 mt-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-4 mt-4 mx-3 mb-2">
          <Card />
        </div>
        <div class="col-4 mt-4 mx-3 mb-2">
          <Card />
        </div>
        <div class="col-4 mt-4 mx-3 mb-2">
          <Card />
        </div>
        <div class="col-4 mt-4 mx-3 mb-2">
          <Card />
        </div>
        <div class="col-4 mt-4 mx-3 mb-2">
          <Card />
        </div>
        <div class="col-4 mt-4 mx-3 mb-2">
          <Card />
        </div>
      </div>
    </div>
  );
}
