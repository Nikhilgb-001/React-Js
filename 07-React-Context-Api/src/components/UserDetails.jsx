import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/Context';

const UserDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate()
  const { users } = useContext(UserContext);
  // console.log(users);
  return (
    <div>
      <h1 className='text-3xl text-zinc-800 font-bold'>
        {users[id].name}
      </h1>

      <h3 className='text-xl text-zinc-400 font-semibold mt-3'>
      {users[id].city}
      </h3>

      <button onClick={()=>navigate(-1)} className='px-5 py-3 mt-5 bg-red-100 rounded'>Go Back</button>
    </div>
  )
}

export default UserDetails