import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

const Button = ({title= " Start a Project"}) => {
  return (
    <div className="w-fit px-4 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-center gap-4 ">
     <span className="text-sm font-medium">{title}</span>
      <BsArrowReturnRight />
    </div>
  );
};

export default Button;
