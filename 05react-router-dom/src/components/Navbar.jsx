import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-4 justify-center items-center mt-10">
      <NavLink to="/">
        
        {(e)=> {
          return <span className={[
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ")}>Home</span>
        }}
        
      </NavLink>

      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-300" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/User"
      >
        User
      </NavLink>

      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "#FCA5A5" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/About"
      >
        About
      </NavLink>

    </nav>
  );
};

export default Navbar;
