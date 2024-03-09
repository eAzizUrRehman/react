import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
  const { user } = useContext(UserContext)

  return !user ? (
    <div className='flex items-center justify-center h-fit py-5 text-xl text-red-500'>
      Please login
    </div>
  ) : (
    <div className='flex items-center justify-center h-fit py-5 text-xl text-green-500'>
      Welcome {user.username}
    </div>
  )
}

export default Profile
