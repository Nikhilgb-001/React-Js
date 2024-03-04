import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [banned, setBanned] = useState("false");
  const [val, setVal] = useState({ name: "Nikhil", age: 22, isBanned: false });

  return (
    <>
      <div className="p-4">
        {/* <h1>{count}</h1>
        <button
          onClick={() => setCount(3113)}
          className="bg-blue-950 mt-3 text-white px-3 py-1 rounded text-sm"
        >
          Count
        </button> */}

        <h1 className="mt-4">{banned.toString()}</h1>
        <button
          onClick={() => setBanned(!banned)}
          className="bg-red-600 mt-3 text-white px-3 py-1 rounded text-sm"
        >
          set Ban
        </button>

        {/* Use State Intermediate */}
        <h1 className="mt-5">{count}</h1>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-sky-800 mt-3 text-white px-3 py-1 rounded text-sm"
        >
          Change
        </button>
      </div>

      {/* Use State Advanced */}

      <h1 className="p-4">name:{val.name}</h1>
      <h1 className="p-4">age:{val.age}</h1>
      <h1 className="p-4">Banned: {val.isBanned.toString()}</h1>
      <button
        onClick={()=>setVal({...val, isBanned: !val.isBanned})}
        className="bg-red-600 mt-3 text-white m-4 px-3 py-1 rounded text-sm"
      >
        set Ban
      </button>
    </>
  );
}

export default App;
