import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../context/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

const Home = () => {
  const [products] = useContext(productContext);
  const { search } = useLocation();
  const [filteredProducts, setfilteredProducts] = useState(null);
  const category = decodeURIComponent(search.split("=")[1]);

  // const getcategoryProducts = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setfilteredProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (!filteredProducts || category == "undefined") setfilteredProducts(products);
  //   if (category != "undefined") getcategoryProducts();
  // }, [category, products]);

  useEffect(() => {
    if (!filteredProducts || category == "undefined") {
      setfilteredProducts(products);
    }
    if (category != "undefined") {
      setfilteredProducts(products.filter((p) => p.category == category));
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="cards-container w-[85%] p-10 pt-[5%] overflow-x-hidden overflow-y-auto flex flex-wrap">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className=" card-div w-[18%] h-[35vh] mb-3 mr-3 border shadow rounded justify-center p-3 flex flex-col items-center"
            >
              <div
                className="card-image-div w-full h-[80%] bg-contain bg-no-repeat bg-center rounded mb-3 hover:scale-110"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="hover:text-blue-300 cursor-pointer">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
