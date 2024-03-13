import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
const App = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name: "joonon",
      artist: "Nikhil",
      added: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name: "Mahiya ve",
      artist: "Solomon",
      added: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name: "Inna soona",
      artist: "Niranjan",
      added: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWN8ZW58MHx8MHx8fDA%3D",
      name: "Wishers",
      artist: "Tailwinder",
      added: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1499415479124-43c32433a620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljfGVufDB8fDB8fHww",
      name: "Restedar BC",
      artist: "Gb",
      added: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljfGVufDB8fDB8fHww",
      name: "Ud da Punjab",
      artist: "Sai",
      added: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG11c2ljfGVufDB8fDB8fHww",
      name: "Dhuuan",
      artist: "Sam",
      added: false,
    },
  ];

  const [songData,setSongData] = useState(data);

  const handelClick = (cardindex)=> {
    setSongData((prev)=> {
      return prev.map((item,index)=> {
        if (index === cardindex) {
          return {...item, added: !item.added}
        }
        return item;
      })
    })
  }
  

  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar data={songData} />
        <div className="px-20 flex gap-10 flex-wrap mt-10">
          {songData.map((item,index)=> {
            return <Card key={index} data={item} index={index} handelClick={handelClick}  />
          })}
        </div>
      </div>
    </>
  );
};

export default App;
