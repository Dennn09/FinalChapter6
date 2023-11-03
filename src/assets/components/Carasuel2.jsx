import React from "react";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useNavigate } from "react-router-dom";
import { useMovieDataPopulerQueryBinar } from "../../services/API-BINAR/get-data-movie-populer-binar";
import { useSelector } from "react-redux";

export const Carasuel2 = (props) => {
  const navigate = useNavigate();
  const [PageNow, setPageNow] = useState(1);

  const { data: fetchUser } = useMovieDataPopulerQueryBinar({
    page: PageNow,
  });

  const datamovieredux = useSelector((state) => state.dataMoviePopuler);

  console.log(fetchUser, "data");

  const renderMovieList = () => {
    const dataToRender = datamovieredux?.setdata?.data?.data
    
    return dataToRender?.map((value) => (
      <div
        key={value.id}
        className="w-[100vw] h-[100vh] flex flex-col relative"
      >
        <div
          // className='w-full h-full bg-cover bg-center'
          className=" w-full relative bg bg-center bg-cover bg-no-repeat min-h-screen"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${value.backdrop_path}')`,
          }}
        >
          <div className=" flex justify-between px-10 p-2">
            {/* <h1 className="font-bold text-[2em] text-red-600">MovieList</h1> */}
            {/* <input
              type="text"
              placeholder="What do you want to watch?"
              className=" bg-transparent border border-red-600 rounded-full w-80 focus:border-red-500 p-2"
            /> */}
            <div></div>
          </div>

          <div className=" h-full w-[50%] ml-7 flex flex-col justify-center items-start space-y-3">
            <h2 className=" font-bold text-[2.5em] text-white ">
              {value.title}
            </h2>
            <h2 className="text-white text-start">{value.overview}</h2>

            <button
              onClick={() => {
                navigate(`/Render/${value.id}`, {
                  state: {
                    idMovie: value.id,
                  },
                });
              }}
              className="bg-red-500 rounded-full w-44 h-8 text-white font-bold"
            >
              <div className="flex justify-between px-3">
                <span>Watch Trailer</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  // console.log(fetchUser, "data")
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        stopOnHover={false}
      >
        {renderMovieList()}
      </Carousel>
    </div>
  );
};

/* <div className='border border-warning-900 w-full h-full relative bg-no-repeat bg-center bg-cover'>
      <img src="https://image.tmdb.org/t/p/original/oUmmY7QWWn7OhKlcPOnirHJpP1F.jpg" alt="" className="w-full h-full" />
    </div> */
