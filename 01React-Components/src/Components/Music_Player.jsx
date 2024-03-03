import React from "react";

const Music_Player = () => {
  const data = [
    {
      name: "Mahiya Ve",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas.",
      btnTxt: "Download Now",
    },
    {
      name: "Junoon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas.",
      btnTxt: "Download Now",
    },
    {
      name: "Ve haaniya",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas.",
      btnTxt: "Download Now",
    },
  ];

  //   const download = (()=> alert("Downloading...")) and  <button onClick={download} className="bg-blue-600 px-3 py-1 text-xs font-semibold text-white mt-3 rounded"> OR
  //   <button onClick={(()=> alert("Downloading..."))} className="bg-blue-600 px-3 py-1 text-xs font-semibold text-white mt-3 rounded">

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 bg-zinc-300 h-screen w-full">
        {data.map((item, index) => (
          <div key={index} className="w-80 bg-zinc-200 px-3 py-4 rounded-md">
            <h2 className="font-semibold text-lg mt-3">{item.name}</h2>
            <p className="w-full text-sm text-zinc-600 mt-3">
              {item.description}
            </p>
            <button
              onClick={() => alert("Downloading...")}
              className="bg-blue-600 px-3 py-1 text-xs font-semibold text-white mt-3 rounded"
            >
              Download Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Music_Player;
