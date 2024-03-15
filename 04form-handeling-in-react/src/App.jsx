import React, { useRef, useState } from 'react'
import { useForm } from "react-hook-form";

function App() {

  // const name = useRef(null);
  // const age = useRef(null);

  // const handelSubmit = (event)=> {
  //   event.preventDefault();
  //   console.log(name.current.value, age.current.value);
  // }

  {/* controlled form inputs */}

  const [val, setVal] = useState({ name: "Nikhil", age: 22 })

  const handelSubmit = (event)=> {
    event.preventDefault();
    console.log(val);
  }


  // react hook form

  // const [register,handelSubmit] = useForm();
  

  return (
    <>
      {/* <form className='p-4' onSubmit={handelSubmit}>
        <input ref={name} type="text" placeholder='Name' className='border-2' />
        <input ref={age} type="number" placeholder='Age' className='border-2' />
        <input type="submit" />
      </form> */}

      {/* controlled form inputs */}

      <form action="" className='p-4' onClick={handelSubmit}>
        <input type="text" placeholder='Name' className='border-2' onChange={(event)=>setVal({...val, name: event.target.value})} />
        <input type="text" placeholder='Name' className='border-2' onChange={(event)=>setVal({...val, age: event.target.value})} />
        <input type="submit" />
      </form>

      {/* react hook form */}

      {/* <form action="" className='p-4' onClick={handelSubmit(data=>console.log(data))}>
        <input {...register('name')} type="text" placeholder='Name' className='border-2' />
        <input {...register('name')} type="text" placeholder='Name' className='border-2' />
        <input type="submit" />
      </form> */}


    </>
  )
}

export default App