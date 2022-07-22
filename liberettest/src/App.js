import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Location from "./components/Location";
import Calendar from "./components/Calendar";
import Home from "./components/Home";
import Chips from "./components/Chips";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <Location />
      <Calendar />
      <Chips />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NavBar />
    </React.Fragment>
  );
}

export default App;
