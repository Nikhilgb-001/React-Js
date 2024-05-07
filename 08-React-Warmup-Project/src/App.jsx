import React from "react";
import Home from "./components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

const App = () => {
  const { search, pathname } = useLocation();
  return (
    <div className="main-div w-screen h-screen flex">
      {(pathname != "/" || search.length >0 ) && (
        <Link
          to={"/"}
          className="text-zinc-900 absolute left-[17%] top-[3%] px-2 py-2 font-semibold rounded bg-red-100"
        >
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
