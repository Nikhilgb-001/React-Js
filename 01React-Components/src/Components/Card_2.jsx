import React from "react";

const Card_2 = () => {
    // Components Reusablity And Conditional Rendering
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quas sint aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quas sint aperiam.",
      Instock: true,
    },

    {
      image:
        "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Coding",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quas sint aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quas sint aperiam.",
      Instock: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEFwcGxlfGVufDB8fDB8fHww",
      name: "Apple",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quas sint aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quas sint aperiam.",
      Instock: false,
    },
  ];

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 px-3 py-4 flex justify-center items-center gap-10 flex-row">
        {data.map((elem, index) => (
          <div
            key={index}
            className="w-52 bg-zinc-100 rounded-md overflow-hidden"
          >
            <div className="w-full h-32 bg-zinc-300">
              <img className="w-full fit-cover " src={elem.image} alt="" />
            </div>
            <div className="w-full h-full px-3 py-4">
              <h2 className="font-semibold">{elem.name}</h2>
              <p className="mt-5 text-xs">{elem.description}</p>
              <button
                className={`mt-5 rounded px-3 py-1 ${
                  elem.Instock ? "bg-blue-600" : "bg-red-500"
                }`}
              >
                {elem.Instock ? "In Stock" : "Out of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card_2;
