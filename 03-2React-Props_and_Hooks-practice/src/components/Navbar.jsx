import React from "react";

function Navbar({data}) {
  return (
    <div className="w-full h-20 bg-zinc-300 flex justify-between p-8 items-center">
        <h3>Orange</h3>
        <div className="flex gap-3 bg-orange-600 rounded-md text-sm text-white font-semibold p-2 px-4">
          <h3>Favourites</h3>
          <h4>{data.filter((item)=>item.added).length}</h4>
        </div>
    </div>
  );
}

export default Navbar;
