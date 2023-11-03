import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UserProfil = () => {
  const dataUser = useSelector(
    (state) => state.reduxGetUser.dataUser.data.data
  );

  const navigate= useNavigate()

  console.log(dataUser);

  return (
    <div className="bg-gradient-to-bl from-red-500 via-yellow-900 to-black w-screen h-screen flex justify-center items-center">
    <div className="border-2 w-2/5 h-3/10 backdrop-blur shadow-lg text-white font-semibold p-4">
      <h1 className="text-2xl mb-2">Nama: {dataUser.name}</h1>
      <h1>Email: {dataUser.email}</h1>
      <button className="bg-red-500 p-[5px]" onClick={()=>{navigate("/dashboard")}}>Back dashboard</button>
    </div>
  </div>
  
  );
};
