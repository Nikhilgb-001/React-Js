import React, { useEffect } from 'react'

const Service = () => {
    useEffect(()=>{
        console.log("service created");

        return ()=>{
            console.log("service destroyed");
        }
    })
  return (
    <div>Service</div>
  )
}

export default Service