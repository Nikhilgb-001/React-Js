import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl flex mx-auto py-6 items-center justify-between border-b-[1px] border-zinc-700 ">
      <div className="nav-left flex items-center ">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />

        <div className="links flex ml-20 gap-14">
          {["Home", "Work", "", "News"].map((item, index) =>
            item.length === 0 ? (
              <span
                key={index}
                className="w-[2px] h-7 bg-zinc-700 inline-block"
              ></span>
            ) : (
              <a
                key={index}
                href="#"
                className="text-sm flex items-center gap-2 font-thin"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 00 0.45em" }}
                    className="rounded-full w-1 h-1 bg-green-600 inline-block "
                  ></span>
                )}

                {item}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
