import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <form
        className="flex justify-center gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="px-2 py-1 text-base font-semibold outline-none rounded-md"
          {...register("name")}
          placeholder="Name"
          type="text"
        />
        <input
          className="px-2 py-1 text-base font-semibold outline-none rounded-md"
          {...register("email")}
          placeholder="Email"
          type="text"
        />
        <input
          className="px-2 py-1 text-base font-semibold outline-none rounded-md"
          {...register("image")}
          placeholder="Image"
          type="text"
        />
        <input
          type="submit"
          className="rounded-md px-3 py-1 bg-blue-600 text-white font-semibold"
        />
      </form>
    </div>
  );
}

export default Form;
