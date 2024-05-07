import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="w-full min-h-screen  bg-zinc-900 text-white">
      <nav className="flex gap-10 justify-center py-5 pt-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/products"}>Products</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
