import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User" element={<User />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
};

export default Router;
