import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "./store/reducers/counterSlice";
const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <h1 className="text-center px-4 py-5 text-3xl font-bold ">
        Redux Toolkit.
      </h1>
      <h1 className="text-center px-4 py-5 text-3xl font-bold ">
        Counter: {value}
      </h1>

      <div className="btns flex justify-center items-center py-5">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 border"
        >
          Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 mx-3 border"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="px-4 py-2 border"
        >
          Increment By 5
        </button>

        <button
          onClick={() => dispatch(incrementAsync(5))}
          className="px-4 mx-3 py-2 border"
        >
          IncrementAsync By 5
        </button>
      </div>
    </div>
  );
};

export default App;
