import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/Axios";
import Loading from "./Loading";
import { productContext } from "../context/Context";
import { toast } from "react-toastify";

const Details = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(productContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
  });

  const productDeleteHandler = (id) => {
    const FilteredProducts = products.filter((p) => p.id !== id);
    setProducts(FilteredProducts);
    localStorage.setItem("products",JSON.stringify(FilteredProducts));
    toast.success("product deleted successfully");
    navigate("/");
  };

  return product ? (
    <div className="w-[80%] h-full m-auto p-[6%] flex rounded justify-between overflow-x-hidden overflow-y-auto">
      <img
        className="h-[80%] w-[40%] object-contain"
        src={`${product.image}`}
        alt=""
      />

      <div className="content w-[50%] pt-3">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="my-5 text-zinc-700 ">{product.category}</h3>
        <h3 className="my-5 text-red-300 ">$ {product.price}</h3>
        <h2 className="text-zinc-400  mb-3 ">
          <p className="mb-[5%] mr-[5%]">{product.description}</p>
        </h2>

        <Link to={`/edit/${product.id}`}
          
          className="px-5 p py-2 border border-blue-300 text-blue-400 rounded mr-5"
        >
          Edit
        </Link>
        <button onClick={() => productDeleteHandler(product.id)} className="px-5 py-2 border border-red-300 text-red-400 rounded mr-5">
          Delete
        </button>

        <Link
          to={"/"}
          className="px-5 py-2 border border-green-300 text-green-400 rounded"
        >
          Go Back
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
