import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const UserDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const GoBackHandler = () => {
    // navigate("/user");
    navigate(-1);
  }
  return (
    <>
      <div className="mt-10 mb-6 w-1/2 m-auto">
        <h1 className="mb-2 text-2xl font-bold">User Details</h1>

        <h1 className="mb-2 text-2xl font-semibold">Hi, {name}</h1>
        <button onClick={GoBackHandler} className="px-3 py-1 bg-red-300 text-black">Go Back</button>
      </div>
    </>
  );
};

export default UserDetails;
