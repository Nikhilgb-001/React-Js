import React from "react";

const Card = ({ values, handelClick, index }) => {
  const { image, name, profession, friends } = values;
  return (
    <>
      {/* <button className="bg-green-800 m-2 transition-all hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
        {text}
      </button> */}

      <div className="w-52 bg-zinc-100 overflow-hidden rounded-md">
        <div className="w-full h-40 bg-sky-300">
          <img
            className="w-full h-full object-cover object-[center_top]"
            src={image}
            alt=""
          />
        </div>
        <div className="p-3 w-full">
          <h1>{name}</h1>
          <h5>{profession}</h5>
          <button
            onClick={() => handelClick(index)}
            className={`${friends === true ? "bg-green-500" : "bg-red-500"} mt-3 transition-all text-white font-bold py-1 px-3 rounded text-xs`}
          >
            {friends === true ?"friends" : "Add Friend"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
