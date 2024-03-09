import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

const Login = () => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && password) setUser({ username, password })
  }

  return (
    <div className='flex items-center justify-center   bg-gray-200 h-fit py-10'>
      <div className='p-6 bg-white rounded shadow-md'>
        <h2 className='text-2xl font-bold mb-5 text-gray-800'>Login</h2>
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full p-2 mb-3 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full p-2 mb-3 border rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />

        <button
          onClick={handleSubmit}
          className='w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline'
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Login
