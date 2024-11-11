import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isLogin, setisLogin] = useState(true);
  const [fullname , setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    setisLogin(!isLogin);
  }

  const getInputData = (e) => {
    e.preventdefault();
    console.log(fullname , email , password);
    setFullname("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className=''>
      <Header />
      <div className='absolute w-full h-full top-0 left-0'>
        <img className='bg-cover w-full h-full object-cover' src='https://github.com/g-wtham/Netflix-Clone/blob/main/images/netflix-background-home.jpg?raw=true' alt='background-image' />
      </div>
      <div className='flex flex-col items-center py-44'>
        <form onSubmit={getInputData} className='absolute w-full sm:w-10/12 md:w-8/12 lg:w-3/12 object-contain mx-auto py-16 my-16 left-0 right-0 flex flex-col bg-black opacity-95 rounded-lg items-center justify-center '>
          <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
          <div className='flex flex-col object-contain w-fit '>
            {
              !isLogin && <input value={fullname} onChange={(e) => setFullname(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            }

            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Passowrd' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            <button className='bg-red-600 rounded-md text-white mt-4 p-3'>{isLogin ? "Login" : "Signup"}</button>
            <p className='text-white mt-2'>{isLogin ? "New to Netflix" : "Already have an account?"} <span onClick={loginHandler} className='text-red-800 font-bold ml-2 cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login