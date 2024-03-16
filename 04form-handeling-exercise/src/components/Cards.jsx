import React from 'react'
import Card from './Card'

function Cards({ users, id, handelRemove }) {
  return (
    <div className='w-full max-h-96 overflow-y-auto  p-4 flex justify-center flex-wrap gap-10'>
        {users.map((item,index)=> {
            return <Card user={item} id={index} handelRemove={handelRemove} key={index} />
        })}
    </div>
  )
}

export default Cards