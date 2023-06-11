import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./home/Home";
import Vehicles from "./vehicles/Vehicles";
import About from "./about/About";
import Description from "./description/Description";
import User from "./users/User";
import Login from "./authorization/Login";
import Register from "./authorization/Register";
import Dealer from "./dealer/Dealer";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/about" element={<About />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/orders" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dealer" element={<Dealer />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
