import React, { useState } from "react";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {

  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password} = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form className="mb-6">
            <input
              
              type= "text"
              id="name"
              value={name}
              placeholder="Full name"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
            />
            <input
              
              type= "text"
              id="email"
              value={email}
              placeholder="Email address"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
            />
            <div className="relative">
            <input
              
              type= {showPassword? "text": "password"}
              id="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
            />
            {showPassword? <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() =>setShowPassword((prevState) => !prevState)}/> : <AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer " onClick={() =>setShowPassword((prevState) => !prevState)}/>}
            </div>
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p>Have account? <Link to= "/sign-in" className="text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1">Sign in</Link></p>
              <p><Link to= "/pass-word" className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1">Forgot password?</Link></p>
            </div>
            <button type="submit" className="w-full text-white bg-blue-600 px-7 py-2 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800">sign up</button>
          <div  className="flex items-center my-4 before:border-t before:flex-1 border-gray-300 after:border-t after:flex-1">
            <p className="text-center font-semibold mx-4">OR</p>
          </div>
          <OAuth/>
          </form>
        
        </div>
      </div>
    </section>
  );
}
