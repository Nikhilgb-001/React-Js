import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
function Slider() {
  const [val, setVal] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-60 h-32 flex overflow-hidden rounded-md relative">
        <img
          className={` ${val===false ? "-translate-x-[0%]": "-translate-x-[100%]"} w-full h-full object-cover flex shrink-0 transition-transform ease-in-out delay-500 `}
          src="https://images.unsplash.com/photo-1709376385680-b7593aa4b9a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <img
          className={` ${val===false ? "-translate-x-[0%]": "-translate-x-[100%]"} w-full h-full object-cover flex shrink-0  transition-transform ease-in-out delay-500`}
          src="https://images.unsplash.com/photo-1709579230537-e06e1df6fcc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"
          alt=""
        />

        <span
          onClick={() => setVal(()=>!val)}
          className={`w-8 h-8 ${val ? "rotate-180" : ""} absolute bottom-[2%] left-1/2 flex justify-center items-center rounded-full bg-[#dadada7B] translate-x-[-50%,-50%]  cursor-pointer`}
        >
          <FaArrowRight size={".7em"} />
        </span>
      </div>
    </div>
  );
}

export default Slider;
