import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
const Product = ({ val, mover, count }) => {
  return (
    <div className="w-full py-24 h-[23rem]">
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-xl mx-auto flex items-center justify-between "
      >
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/4">
          <p className="mb-10">{val.desc}</p>
          <div className="flex gap-3 items-center">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
