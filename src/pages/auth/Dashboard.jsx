// import React, { useState } from 'react';
import { Carasuel2 } from "../../assets/components/Carasuel2";
import { useEffect, useState } from "react";
import { useMovieDataPopulerQueryBinar } from "../../services/API-BINAR/get-data-movie-populer-binar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, getuserRedux } from "../../redux/action/auth.login";
import { dataMovie } from "../../redux/action/data.Movie";
// import SearchImage from '../assets/img/Search.svg'

export const Dashboard = () => {
  const navigate = useNavigate();
  const [dataPopuler, setdataPopuler] = useState(1);
  const DataRedux = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const Data = useSelector((state) => state.makup);

  console.log(DataRedux, "DataRedux");
  console.log(DataRedux.token, "DataRedux TOken");

  const { data: fetchUser } = useMovieDataPopulerQueryBinar({
    page: dataPopuler,
  });

  const [SearchData, setSearchData] = useState("");
  const [simpanDataSearch, setsimpanDataSearch] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSimpanClick = () => {
    setsimpanDataSearch(SearchData);
    navigate(`/HasilSearch`, {
      state: {
        query: SearchData,
      },
    });
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleSimpanClick();
    }
  };

  const renderDataPupuler4 = () => {
    const dataToRender = datamovieredux?.setdata?.data?.data.slice(14, 19);

    return dataToRender?.map((value) => (
      <div
        key={value.id}
        className="w-[20rem] h-[75%] mt-5 mx-4 flex flex-col hover:border border-emerald-50"
        onClick={() => {
          navigate(`/Render/${value.id}`, {
            state: {
              idMovie: value.id,
            },
          });
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
          alt={value.title}
          className="w-full h-full"
        />
      </div>
    ));
  };

  const handleLogout = () => {
    dispatch(LogOut());
  };

  const datamovieredux = useSelector((state) => state.dataMoviePopuler);
  const getUserr = useSelector((state) => state.reduxGetUser);
  const getdatamovie = () => {
    dispatch(dataMovie());
  };

  console.log(datamovieredux, "datamovieredux");

  const getdatauser = () => {
    dispatch(getuserRedux());
  };
  useEffect(() => {
    getdatamovie();
    getdatauser();
  }, []);

  console.log(getUserr, "getUserr1");
  console.log(getUserr?.dataUser?.data?.data.name, "getUserr2");

  const NamaUser = getUserr?.dataUser?.data?.data.name;

  return (
    <div className="bg-[#595959]  items-center flex flex-col space-y-5 top-0 ">
      {/* <div className='w-[95%] rounded-fu mt-2 relatif'><Carasuel2  /> */}
      <div className="w-[100%] relatif">
        <Carasuel2 />
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red-500 rounded-full px-3 flex justify-center">
          <input
            type="text"
            className="w-64 p-2 bg-transparent  shadow-md  font-bold"
            placeholder="What do you want to watch?"
            value={SearchData}
            onChange={handleSearchInputChange}
            onKeyDown={handleEnterPress}
          />
        </div>
      </div>
      <div className="    h-[35rem] w-[95%]  bg-white  rounded-[1rem] mb-10">
        <div className="pt-4  flex justify-between items-center px-4">
          <h2 className="font-bold text-[1.5rem]">Populer Movie</h2>
          <a
            onClick={() => {
              navigate("/PopulerMovie");
            }}
            className="text-red-500 font-semibold text-[1.5em]"
          >
            See All Movie{" "}
          </a>
        </div>
        <div className="flex justify-between">{renderDataPupuler4()}</div>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 rounded-md text-white font-bold py-2 px-4  absolute top-1 right-4"
      >
        Logout
      </button>
      <div onClick={()=>{navigate("/UserProfil")}} className=" flex  rounded-3xl bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4  absolute top-1 right-[7rem] ">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <div className="ml-2"> {NamaUser}</div>
      </div>
      <h1 className="font-bold text-[2em] text-red-600 absolute top-0 left-4">
        MovieList
      </h1>
      {/* <h1>{NamaUser}</h1> */}
    </div>
  );
};
