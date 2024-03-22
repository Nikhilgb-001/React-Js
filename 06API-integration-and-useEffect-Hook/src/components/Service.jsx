import React, { useEffect, useState } from "react";
const Service = () => {
  const [first, setFirst] = useState(
    "this is normal data before rendering...."
  );

  const [second, setSecond] = useState(
    "this is second data before rendering...."
  );

  useEffect(() => {
    console.log("service created");

    return () => {
      console.log("service destroyed");
    };
  }, []);

  return (
    <div>
      <h1>Service Page</h1>

      <h1 className="mt-3 mb-2">{first}</h1>
      <button onClick={() => setFirst("changed normal data")} className="px-2 py-3 mt-2 mb-3 bg-red-200 text-sm">
        change normal data
      </button>
      <h1>{second}</h1>
      <button onClick={() => setSecond("changed Large data")} className="px-2 py-3 mt-2 mb-3 bg-red-200 text-sm">
        change Large  data
      </button>
    </div>
  );
};

export default Service;
