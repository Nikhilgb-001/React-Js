import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">User</div>

      <div className="flex flex-col mt-3 w-1/2 justify-center items-center">
        <Link to="/User/Nikhil" className="bg-red-300 mb-3 px-2 py-1 hover:bg-red-400">
          Nikhil
        </Link>
        <Link to="/User/Solomon" className="bg-red-300 mb-3 px-2 py-1 hover:bg-red-400">
          Solomon
        </Link>
        <Link to="/User/Niranjan" className="bg-red-300 mb-3 px-2 py-1 hover:bg-red-400">
          Niranjan
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default User;
