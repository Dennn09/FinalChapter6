import React, { useEffect } from "react";
import { useState } from "react";
import { UseLoginUser } from "../../services/auth/login-user";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import background from '../../assets/img/movie list bg.jpeg'
import GoogleLogin from "../../assets/components/GoogleLogin";
import { useDispatch, useSelector } from "react-redux";
import { LoginUserRe } from "../../redux/action/auth.login";
export const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: loginUser, isSuccess } = UseLoginUser();

  const DataRedux = useSelector((state) => state.auth);

  console.log(DataRedux, "data")

  const handleInput = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  // const login = () => {
  //   dispatch({
  //     email: Email,
  //     password: Password,
  //   });
  // };

  const login =  () => {
     dispatch(LoginUserRe(
        {
          email: Email,
          password: Password,
        } 
      ))
    }

    
  useEffect(() => {
    if (DataRedux.isLogin === true) {
      navigate('/dashboard')
    }
  }, [dispatch(LoginUserRe)])
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      login();
    }
  };

  

  console.log(Email, "email");
  console.log(Password, "Password");

  return (
    <div className="h-screen relative">
    <img
      src={background}
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
            placeholder="email"
            id="email"
            className="border-[1px] w-[80%] py-3 px-5 block border-gray-200 rounded-full bg-transparent text-white text-lg "
            type="text"
          />
          <input
            onChange={handleInput}
            onKeyPress={handleEnterPress}
            placeholder="password"
            id="password"
            className="border-[1px] w-[80%] py-3 px-5 block border-gray-200 rounded-full bg-transparent text-white text-lg "
            type="password"
          />
        </div>
        <button
          className="bg-gray-50 hover:bg-gray-200  text-black h-[2.8rem] w-[80%] rounded-full"
          onClick={login} 
        >
          Login
        </button>
     
        <GoogleLogin/>
        <h1 className="text-white">
      
          Belum Punya akun?
          <a className="cursor-pointer text-red-500" onClick={() => navigate("/register")}>
            Register
          </a>
        </h1>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
