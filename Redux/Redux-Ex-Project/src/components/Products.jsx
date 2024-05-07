import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/productActions";

const Products = () => {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncgetproducts());
  }, []);

  return (
    <div className="w-full h-full p-10">
      <div className="m-auto w-full p-10 mt-5 bg-red-300">
        <h1 className="text-2xl font-bold text-red-900 mb-5">Products List</h1>
        <ul>
          {products &&
            products.map((p, index) => {
              return (
                <li className="text-xl mb-6 font-semibold text-red-900 list-disc" key={p.id}>
                  {p.title}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Products;
