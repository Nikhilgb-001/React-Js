import React from "react";

const Card = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 px-3 py-4 flex justify-center items-center gap-10">
      <h1>Creating First Component</h1>
      <div className="w-52 bg-zinc-100 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img
            className="w-full fit-cover "
            src="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww"
            alt=""
          />
        </div>
        <div className="w-full h-full px-3 py-4">
          <h2 className="font-semibold">Amazon Basics</h2>
          <p className="mt-5 text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusamus illum excepturi.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
