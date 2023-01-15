import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../firebase';


export default function Profile() {
const auth = getAuth()
const navigate = useNavigate()
const [changeDetail, setChangeDetail] = useState(false)

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const {name, email} = formData;
  function onLogout () {
    auth.signOut()
    navigate("/")
  }
//  function to edit the name
  function onChange(e) {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  async function  onSubmit(){
   try {
    if(auth.currentUser.displayName !== name ){
      // update display name in firebase auth
      await updateProfile (auth.currentUser, {
        displayName: name,
      });
      // update name in the firestore
      const docRef = doc(db, "user", auth.currentUser.uid)
      await updateDoc(docRef, {
        name: name
      });
    }
    toast.success('Profile details updated')
   } catch (error) {
    toast.error("Could not update the profile details")
   }
  }

  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6'>My Profile</h1>
        <div className='w-full md:w-[50%] px-3'>
        <form>
          {/* Beginning of input */}
          <input 
          type="text" 
          id='name' 
          value={name} 
          disabled = {!changeDetail}
          onChange = {onChange}
          className = {`w-full px-4 py-2 mt-6 text-xl text-gray-700  bg-white-700 border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`}
          />
          <input 
          type="text" 
          id='email' 
          value={email} 
          className ="w-full px-4 py-2 mb-6 mt-6 text-xl text-gray-700 bg-white-700 border-gray-300 rounded transition ease-in-out"
          />
          {/* End of input */}

          <div className='flex justify-between whitespace-nowrap text-sm md:text-lg mb-6'>
            <p className='flex items-center'>Do you want to change your name?
              <span onClick={() =>{
                changeDetail && onSubmit()
              setChangeDetail((prevState) => !prevState)
              }} 
              className='text-red-500 hover:text-red-700 cursor-pointer transition ease-in-out duration-200 ml-1'>
                
              {changeDetail ? "Apply change" : "Edit"}
                
                </span>
            </p>
            <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>Sign out</p>
          </div>
        </form>
        </div>
      </section>
    </>
  )
}
