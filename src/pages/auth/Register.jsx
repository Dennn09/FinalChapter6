import React from 'react'
import { useState } from 'react'
import { UseCreateUser } from '../../services/auth/register-user'
import { useNavigate } from 'react-router-dom'
import bgMovie from '../../assets/img/bgMovie.jpeg'
export const Register = () => {
  const [Username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const navigate = useNavigate()

  const {mutate : registerUser, isSuccess , isError, error} = UseCreateUser()

  if (isSuccess) {
   alert("Berhasil Register")
   navigate("/Login")
  }

  

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "username") {
        setUsername(e.target.value)
      }
      if (e.target.id === "email") {
        setEmail(e.target.value)
      }
      if (e.target.id === "password") {
        setPassword(e.target.value)
      }
    }
  }

  const regisUser = () => {
    registerUser({
      "email": Email,
      "name": Username,
      "password": Password
    })
  }

  console.log(Username, "Username")
  console.log(Email, "Email")
  console.log(Password, "Password")

  if (error) {
    console.log(error.response.data.message, "error tess" );
  }
  return (
    <div className="h-screen relative">
    <img
      src={bgMovie}
      alt="bg"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1, // Mengatur z-indeks ke angka negatif
      }}
    />
      <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Warna hitam dengan opacity 0.6
    }}
  />
      
      <div
        className="border-[2px] backdrop-blur-md shadow-sm border-red-500 h-[55%] w-[30%] flex flex-col items-center justify-evenly"
        style={{
          position: "absolute",
          top: "50%", // Center it vertically
          left: "50%", // Center it horizontally
          transform: "translate(-50%, -50%)", // Center it perfectly
          zIndex: 1, // Ensure it appears above the background
        }}
      >
        <h1 className="text-white font-bold text-[2rem]">Login</h1>
        <div className="flex flex-col space-y-4 items-center w-full">
        <input
            onChange={handleInput}
            placeholder="username"
            id="username"
            className="border-[1px] w-[80%] py-3 px-5 block border-gray-200 rounded-full bg-transparent text-white text-lg "
            type="text"
          />
          <input
            onChange={handleInput}
            placeholder="email"
            id="email"
            className="border-[1px] w-[80%] py-3 px-5 block border-gray-200 rounded-full bg-transparent text-white text-lg "
            type="text"
          />
          <input
            onChange={handleInput}
            // onKeyPress={handleEnterPress}
            placeholder="password"
            id="password"
            className="border-[1px] w-[80%] py-3 px-5 block border-gray-200 rounded-full bg-transparent text-white text-lg "
            type="password"
          />
        </div>
        <button
          className="bg-gray-50 hover:bg-gray-200  text-black h-[2.8rem] w-[80%] rounded-full"
          onClick={()=>{regisUser()}}
        >
          Register
        </button>
      </div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
    // <div className='flex justify-center items-center w-full h-[100vh] space-x-2'>
    //   <input onChange={handleInput} placeholder='username' id='username' className='border-[10px]' type='text'/>
    //   <input onChange={handleInput} placeholder='email' id='email' className='border-[10px]' type='text'/>
    //   <input onChange={handleInput} placeholder='password' id='password' className='border-[10px]' type='password'/>
    //   <button onClick={()=>{regisUser()}} className='bg-blue-500 hover:bg-blue-700 text-white h-[2.8rem] w-[5rem]'>Register</button>
      
    // </div>
  )
}
