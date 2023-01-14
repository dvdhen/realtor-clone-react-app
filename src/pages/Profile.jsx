import { getAuth } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';


export default function Profile() {
const auth = getAuth()
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email} = formData;
  function onLogout () {
    auth.signOut()
    navigate("/")
  }

  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6'>My Profile</h1>
        <div className='w-full md:w-[-50%] px-3'>
        <form action="">
          {/* Beginning of input */}
          <input 
          type="text" 
          id='name' 
          value={name} 
          className = "w-full px-4 py-2 mt-6 text-xl text-gray-700 bg-white-700 border-gray-300 rounded transition ease-in-out"
          />
          <input 
          type="text" 
          id='name' 
          value={email} 
          className = "w-full px-4 py-2 mb-6 mt-6 text-xl text-gray-700 bg-white-700 border-gray-300 rounded transition ease-in-out"
          />
          {/* End of input */}

          <div className='flex justify-between whitespace-nowrap text-sm md:text-lg mb-6'>
            <p className='flex items-center'>Do you want to change your name?
              <span className='text-red-500 hover:text-red-700 cursor-pointer transition ease-in-out duration-200 ml-1'>Edit</span>
            </p>
            <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>Sign out</p>
          </div>
        </form>
        </div>
      </section>
    </>
  )
}
