import React, { useState } from "react";
import Slider from "./Components/Slider";
const App = () => {
  //   const [val, setVal] = useState({ name: "Nikhil", age: 22, isBanned: false });

  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  const [name, setName] = useState(false);
  const [obj, setObj] = useState([
    {
      name: "Nikhil",
      age: 22,
    },
    {
      name: "Solomon",
      age: 22,
    },

    {
      name: "Raji",
      age: 22,
    },

    {
      name: "Kavya",
      age: 22,
    },
  ]);

  return (
    <>
      <div id="main" className="p-4 ">
        {/* <h1> {val.name}</h1>
        <h1> {val.isBanned.toString()}</h1>

        <button
          onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
          className={`px-3 py-1 rounded-full mt-3 ${
            val.isBanned ? "bg-blue-600" : "bg-red-600"
          } text-white`}
        >
          change
        </button> */}

        {/* Use State With Arrays  */}

        <h1>
          {val.map((item) => (
            <h1>{item}</h1>
          ))}
        </h1>

        {/* Use State With Array of object */}

        {/* {obj.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
          </div>
        ))} */}

        {obj.map((item) => (
          <div>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
          </div>
        ))}

        {/* <button
          onClick={() =>
            setVal(() => {
              return val.filter((index) => index !== val.length - 1);
            })
          }
          className="px-3 py-1 bg-green-600 text-white text-xs font-semibold mt-3 rounded-full"
        >
          remove
        </button> */}

        {/* <button
          onClick={() =>
            setVal(() => val.filter((item, index) => index !== val.length - 1))
          }
          className="px-3 py-1 bg-green-600 text-white text-xs font-semibold mt-3 rounded-full"
        >
          remove
        </button> short hand implimantation of above code */}

        {/* remove only the second element  */}

        {/* <button onClick={()=> setVal(()=>{
            return val.filter((item, index)=> index !==2)
        })} className="px-3 py-1 bg-green-600 text-white text-xs font-semibold mt-3 rounded-full">remove</button> */}

        {/* return only Even numbers */}
        {/* return only odd numbers  val.filter((item,index)=> item%2 === 0)*/}

        {/* <button onClick={()=> setVal(()=> {
            return val.filter((item,index)=> item%2 === 0)
        })} className="px-3 py-1 bg-green-600 text-white text-xs font-semibold mt-3 rounded-full">remove</button> */}

        {/* adding a new element in array */}

        <button
          onClick={() => setVal([...val, 7])}
          className="px-3 py-1 bg-green-600 text-white text-xs font-semibold mt-3 rounded-full mb-3 mr-3"
        >
          remove
        </button>

        {/* changeing array of objects */}
        <button
          onClick={() =>
            setObj(() =>
              obj.map((item) =>
                item.name === "Raji" ? { name: "Raji", age: 99 } : item
              )
            )
          }
          className="px-3 py-1 bg-green-600 text-white text-xs font-semibold mt-3 rounded-full"
        >
          change Age
        </button>

        {/* chnage the text  */}
        <h1>{name === false ? "Get Out" : "Get In"}</h1>
        <button
          onClick={() => setName(() => !name)}
          className="px-3 py-1 bg-green-600"
        >
          change txt
        </button>
      </div>
      <Slider/>
    </>
  );
};

export default App;
