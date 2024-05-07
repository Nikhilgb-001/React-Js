import React, { useContext } from "react";
import { productContext } from "../context/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(productContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
  };

  return (
    <>
      <nav className="h-full w-[15%] bg-zinc-50 flex flex-col items-center px-5 py-5">
        <a
          className="px-5 p py-3 border border-blue-300 rounded"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="my-3 w-[80%]" />
        <h1 className="w-[80%] text-2xl mb-3 ">category filter</h1>
        <div className="w-[80%]">
          {distinct_category.map((c, i) => (
            <Link
              key={i}
              to={`/?category=${c}`}
              className=" mb-3 flex items-center"
            >
              <span style={{backgroundColor:color()}} className="rounded-full mr-2 w-[15px] h-[15px]"></span>
              {c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
