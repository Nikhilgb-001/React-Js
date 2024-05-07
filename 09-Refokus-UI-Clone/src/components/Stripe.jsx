import React from "react";

const Stripe = ({ val }) => {
  return (
    <div className="w-[20%] flex items-center justify-between border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 px-10 py-6">
      <img src={val.url} alt="" />
      <span className="font-bold flex items-center justify-between">
        {val.number}
      </span>
    </div>
  );
};

export default Stripe;
