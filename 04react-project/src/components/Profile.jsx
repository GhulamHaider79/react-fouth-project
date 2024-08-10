import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
  if (!user) return  <div className='flex justify-center'><h4 className='w-52 bg-slate-500 text-center'>please log In</h4></div> 
 
  return <div className='flex justify-center'>Welcome {user.username}</div>
}

export default Profile
