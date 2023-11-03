import React, { useEffect, useRef, useState } from "react";
import { useMovieDataPopulerQueryBinar } from "../services/API-BINAR/get-data-movie-populer-binar";
import { useMovieDataQueryDetailBinar } from "../services/API-BINAR/get-data-detail-binar";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useDispatch, useSelector } from "react-redux";
import { dataDetailRedux } from "../redux/action/data.Movie";

export const Render = () => {
  const data1 = useLocation();
  const { id } = useParams();
  const videoRef = useRef(null);
  const dispatch = useDispatch()

  const getDataDetail = useSelector((state) => state.reduxDataDetail.dataDetail.data)
  const navigate = useNavigate()
  const getdataRedux = () =>{
    dispatch(dataDetailRedux(id))
  }
  
  useEffect(() => {
    getdataRedux()
  }, [])

  console.log(getDataDetail , "111")

  // const {
  //   data: movieData,
  //   isLoading,
  //   isError,
  // } = useMovieDataQueryDetailBinar(id);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Error loading movie data.</p>;
  // }
  // console.log(movieData, "omaa");
  const renderTrailer = () => {
    const datarender = getDataDetail?.data?.videos?.slice(0, 8);
    //cek daata vidio klaau ada / ga ada
    if (!datarender || datarender.length === 0) {
      return (
        <p className="text-center font-bold text-[2rem] w-full">
          No trailer available.
        </p>
      );
    }

    return datarender?.map((value, index) => (
      <div key={index} className=" w-auto h-auto m-8 ">
        <YouTube
          videoId={value.key}
          opts={{ width: "490px", height: "640px" }}
        />
      </div>
    ));
  };
  // console.log(movieData, "teeess");
  return (
    <div className="h-screen relative bg-black overflow-y-auto ">
      <div
        className=" bg-center bg-cover bg-no-repeat bg-opacity w-full h-full flex items-center justify-center bg-blend-soft-light bg-gray-700"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${getDataDetail?.data?.backdrop_path}')`,
        }}
      >
        <a
   
          onClick={()=>{navigate("/dashboard")}}
          className="text-white absolute top-2 right-2 bg-red-500 p-2 rounded-full"
        >
          Back to dashboard
        </a>
        <div className=" w-[50%] h-[50%] flex ">
          <div className=" h-[100%] w-[30%] text-white">
            <img
              src={`https://image.tmdb.org/t/p/original/${getDataDetail?.data?.poster_path}`}
              className="w-full h-full"
            />
          </div>
          <div className="  h-[100%] w-[70%] text-white flex flex-col space-y-2 pl-4">
            <h1 className="text-[3.5rem] font-bold">{getDataDetail?.data?.title}</h1>
            <div className="flex">
              {getDataDetail?.data?.genres?.map((value) => (
                <button
                  key={value.id}
                  className="bg-transparent  border-solid border-[3px] border-white text-white w-auto h-auto p-2 rounded-full m-1"
                >
                  {value.name}
                </button>
              ))}
            </div>
            <h1>Release Date: {getDataDetail?.data?.release_date}</h1>

            <p>{getDataDetail?.data?.overview}</p>
            <p>Rating: {getDataDetail?.data?.vote_average.toFixed(2)} / 10</p>
            <button
              className="bg-red-500 text-white w-32 h-8 rounded-full"
              onClick={() => {
                videoRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <h1 className="text-[2rem] text-white font-bold">Trailer</h1>
      </div>
      <div
        ref={videoRef}
        className="flex flex-wrap justify-center text-center text-white "
      >
        {renderTrailer()}
        <div className="h-[4rem] w-[40rem]  flex items-center space-x-2 justify-evenly"></div>
      </div>
    </div>
  );
};
