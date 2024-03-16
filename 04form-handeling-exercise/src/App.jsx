import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'



const App = () => {
  const [users, setUsers] = useState([]);

  const handelFormSubmitData = (data) => {
    setUsers([...users, data]);
  }

  const handelRemove = (id)=> {
    setUsers(users.filter((item,index)=>index != id))
  }

  return (
    <div className='w-full h-screen bg-zinc-300 flex items-center justify-center p-14'>
      <div className='container mx-auto'>
        <Cards handelRemove={handelRemove} users={users} />
        <Form handleFormSubmitData={handelFormSubmitData} />
      </div>
    </div>
  )
}

export default App