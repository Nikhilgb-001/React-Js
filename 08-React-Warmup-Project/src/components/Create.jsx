import React, { useContext, useState } from "react";
import { productContext } from "../context/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(productContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("no feilds can be empty");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    navigate("/");
    toast.success("product added successfully");
    // console.log(product);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] w-screen h-screen flex flex-col items-center"
    >
      <h1 className="mb-5 w-1/2 text-3xl ">Add New Product</h1>

      <input
        className="text-1xl rounded border w-1/2 bg-zinc-200 p-3 mb-3"
        type="url"
        placeholder="image"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />

      <input
        className="text-1xl rounded border w-1/2 bg-zinc-200 p-3 mb-3"
        type="text"
        placeholder=" title "
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          className="text-1xl border w-[48%] rounded bg-zinc-200 p-3 mb-3"
          type="text"
          placeholder="category"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />

        <input
          className="text-1xl border w-[48%] rounded bg-zinc-200 p-3 mb-3"
          type="number"
          placeholder="price"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-1xl border w-1/2 rounded bg-zinc-200 p-3 mb-3 resize-none"
        rows="8"
        placeholder="enter product description here"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button
          className="px-5 p py-3 border border-blue-300 rounded"
          href="/create"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Create;
