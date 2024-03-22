import React, { useEffect } from "react";
// import axios from "axios";
import axios from '../utils/axios';
import { useState } from "react";
const Show = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("/products")
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getProducts();
  }, []);

  // const addProducts = async () => {
  //   const api = "https://fakestoreapi.com/products";
  //   axios
  //     .post(api, {
  //       title: "test product",
  //       price: 13.5,
  //       description: "lorem ipsum set",
  //       image: "https://i.pravatar.cc",
  //       category: "electronic",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <>
      <button
        onClick={() => getProducts()}
        className="bg-red-600 text-white px-5 py-2 rounded text-sm "
      >
        get Api
      </button>
      <br />
      <br />
      {/* <button
        onClick={() => addProducts()}
        className="bg-red-600 text-white px-5 py-2 rounded text-sm "
      >
        add Products
      </button> */}
      <hr className="my-3" />
      <ul className="flex items-center justify-center flex-col">
        {products.length > 0 ? (
          products.map((p) => (
            <li className="px-5 whitespace-nowrap mb-2 py-2 bg-zinc-900 text-white w-1/2 text-lg">
              {p.title}
            </li>
          ))
        ) : (
          <h1 className="text-3xl font-semibold px-3">Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
