import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Location from "./components/Location";
import Calendar from "./components/Calendar";
import Home from "./components/Home";
import Chips from "./components/Chips";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Cart from "./components/Cart";

function App() {
  return (
    <React.Fragment>
      <Location />
      <Calendar />
      <Chips />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <NavBar />
    </React.Fragment>
  );
}

export default App;
