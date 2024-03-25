import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import UserDetails from "./components/UserDetails";

const App = () => {
  return (
    <>
      <div className="p-1 m-auto w-1/2">
        <nav className="mt-10 my-10 flex justify-center gap-10 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/user"}>Users</Link>
          <Link to={"/about"}>About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
