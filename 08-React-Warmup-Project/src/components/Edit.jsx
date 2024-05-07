import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../context/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(productContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const Addedproduct = (e) => {
    e.preventDefault();
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("no feilds can be empty");
      return;
    }

    const productidx = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[productidx] = { ...products[productidx], ...product };
    console.log(copyData);
    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);

    // const product = {
    //   id: nanoid(),
    //   title,
    //   image,
    //   category,
    //   price,
    //   description,
    // };
    // setProducts([...products, product]);
    // localStorage.setItem("products", JSON.stringify([...products, product]));
    // navigate("/");
  };

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  return (
    <form
      onSubmit={Addedproduct}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="mb-5 w-1/2 text-3xl ">Edit Product</h1>

      <input
        className="text-1xl rounded border w-1/2 bg-zinc-200 p-3 mb-3"
        type="url"
        placeholder="image"
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />

      <input
        className="text-1xl rounded border w-1/2 bg-zinc-200 p-3 mb-3"
        type="text"
        placeholder=" title "
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          className="text-1xl border w-[48%] rounded bg-zinc-200 p-3 mb-3"
          type="text"
          placeholder="category"
          name="category"
          onChange={changeHandler}
          value={product && product.category}
        />

        <input
          className="text-1xl border w-[48%] rounded bg-zinc-200 p-3 mb-3"
          type="number"
          placeholder="price"
          name="price"
          onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        className="text-1xl border w-1/2 rounded bg-zinc-200 p-3 mb-3 resize-none"
        rows="8"
        placeholder="enter product description here"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
      ></textarea>
      <div className="w-1/2">
        <button
          className="px-5 p py-3 border border-blue-300 rounded"
          href="/create"
        >
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
