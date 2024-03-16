import React from "react";

function Card({ user, id, handelRemove }) {
  return (
    <div className="w-52 h-full bg-zinc-200 rounded-lg flex flex-col items-center p-2">
      <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-900 object-cover overflow-hidden ">
        <img src={user.image} alt="" className="w-full h-full object-cover " />
      </div>

      <h1 className="text-xl font-semibold mt-2">{user.name}</h1>
      <h3 className="opacity-70">{user.email}</h3>
      <p className="text-center font-semibold leading-1 tracking-tight mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero soluta
        ullam quia.
      </p>

      <button onClick={()=>handelRemove(id) } className="px-3 py-1 bg-red-600 text-white rounded-md mt-3">
        remove
      </button>
    </div>
  );
}

export default Card;
