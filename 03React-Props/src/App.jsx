import React, { useState } from 'react'
import Card from './Components/Card'
function App() {

  const raw = [
    {name:"Nikhil", profession:"Web Developer", image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", friends:false},
    {name:"Solomon", profession:"App Developer", image:"https://images.unsplash.com/photo-1521119989659-a83eee488004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D", friends:false},
    {name:"Sai", profession:"HR", image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww", friends:false},
    {name:"Niranjan", profession:"Cook", image:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0fGVufDB8fDB8fHww", friends:false},
  ]

  const [data, setData] = useState(raw)

  const addfriend = (cardindex)=> {
    setData((prev)=> {
      return prev.map((item,index)=> {
        if (index === cardindex) {
          return{...item, friends : !item.friends }
        }
        return item;
      })
    })
  }


  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center gap-4'>
      {/* <Card text="Download" />
      <Card text="Know More" /> */}

      {/* {data.map((item,index)=>(
        <Card image={item.image} name={item.name} profession={item.profession} />
      ))} */}

      {/* {data.map((item,index)=>(
        <Card values={item} />
      ))} */}

      {data.map((item,index)=>(
        <Card key={index} handelClick={addfriend} index={index} values={item} />
      ))}

    </div>
  )
}

export default App