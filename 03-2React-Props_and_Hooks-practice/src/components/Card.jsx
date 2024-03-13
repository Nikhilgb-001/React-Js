import React from "react";

function Card({data, handelClick, index}) {
  const {image, name, artist, added} = data;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 relative pb-8 mt-10">
      <div className="w-20 h-20 bg-orange-500 rounded-md">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="">
        <h3 className="text-xl leading-none font-bold ">{name}</h3>
        <h4 className="text-sm">{artist}</h4>
      </div>

      <button onClick={()=>handelClick(index)}
        className={`px-4 py-3 ${added === true ? "bg-green-600" : "bg-orange-600"} absolute text-white text-xs rounded-full bottom-0  -translate-x-[50%] -translate-y-[-50%] left-1/2 whitespace-nowrap font-semibold`}
      >
        {added === true ? "added" :"add to favourites"}
      </button>
    </div>
  );
}

export default Card;
