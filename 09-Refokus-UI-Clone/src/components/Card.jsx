import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const Card = ({ width, start, para, hover = "false" }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover==="true" && "#7443ff",
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center ">
          <h3>Up Next:News</h3>
          <FaArrowRight />
        </div>
        <h1
          className="text-3xl
         font-semibold mt-5"
        >
          Insights And Behind The Scenes.
        </h1>
      </div>
      <div className="w-full -mt-48">
        {start && (
          <>
            <h1 className="text-8xl font-medium tracking-tight leading-none ">
              Start a project
            </h1>
            <button className="rounded-full px-5 py-2 mt-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm font-medium text-zinc-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            dolorum sunt ducimus.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
