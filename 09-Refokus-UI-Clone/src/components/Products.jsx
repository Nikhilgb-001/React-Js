import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
const Products = () => {
  var products = [
    {
      title: "Arqitel",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab vitae, eveniet tempora magnam odit ipsam animi optio.",
      live: true,
      case: false,
      bg: "bg-[#0B0468]",
    },
    {
      title: "Cula",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab vitae, eveniet tempora magnam odit ipsam animi optio.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab vitae, eveniet tempora magnam odit ipsam animi optio.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab vitae, eveniet tempora magnam odit ipsam animi optio.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab vitae, eveniet tempora magnam odit ipsam animi optio.",
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab vitae, eveniet tempora magnam odit ipsam animi optio.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="w-full mt-32 relative">
      {products.map((item, index) => (
        <Product val={item} mover={mover} count={index} />
      ))}

      <div className="screen w-full h-full absolute top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="center-window w-[32rem] h-[23rem] absolute left-[50%] -translate-x-[50%] overflow-hidden bg-white"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="center-window w-full h-full bg-sky-100"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="center-window w-full h-full bg-sky-200"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="center-window w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="center-window w-full h-full bg-sky-400"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="center-window w-full h-full bg-sky-500"
          ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="center-window w-full h-full bg-sky-600"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
