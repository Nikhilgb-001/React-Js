import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32 ">
        <div className="basis-1/2 flex gap-4">
          <h1 className="text-[11.5rem] tracking-tight font-semibold leading-none ">
            refokus.
          </h1>
        </div>
        <div className=" basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {["instagram", "twitter", "linkedin"].map((item, index) => (
              <a
                key={index}
                className="mt-2 block text-zinc-600 text-sm capitalize "
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {["instagram", "twitter", "linkedin"].map((item, index) => (
              <a
                key={index}
                className="mt-2 block text-zinc-600 text-sm capitalize "
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
            {["instagram", "twitter", "linkedin"].map((item, index) => (
              <a
                key={index}
                className="mt-2 block text-zinc-600 text-sm capitalize "
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
