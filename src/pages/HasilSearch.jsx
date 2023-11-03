import React, { useEffect } from 'react'
import { useMovieDataQuerySearch } from '../services/User/get-data-movie-search'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { dataSearchRedux } from '../redux/action/data.Movie';

export const HasilSearch = () => {
  const location = useLocation();
  const { query: datass } = location.state;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data: search , isLoading } = useMovieDataQuerySearch({
    query: datass
  });

    const dataSearch = useSelector((state) => state.reduxdataSearch.dataSearch)

      console.log(dataSearch, "dataSearch");
      console.log(dataSearch?.data?.data, "dataSearch2");
    

    const getDataS = () =>{
      dispatch(dataSearchRedux(datass))
    }
    useEffect(() => {
      getDataS()
    }, [])
    

    
  if (isLoading) {
    return <p>Loading...</p>; 
  }

  console.log(search)

  const renderMovie = () => {
    if (!dataSearch?.data?.data || dataSearch?.data?.data.length === 0) {
      return <p>No results found.</p>;
    }
    return search?.results?.map((value) => (
      <div key={value.id} className='w-[20rem] h-[35rem] mt-5 mx-4 flex flex-col hover:border border-emerald-50  '
      onClick={() => {
        navigate(`/Render/${value.id}`,{
          state:{
            idMovie : value.id
          }
        })

      }}>
      <img src={`https://image.tmdb.org/t/p/original/${value.poster_path}`} alt={value.title} className='w-full h-auto' />
      <h2 className='mt-2 text-center '>{value.title}</h2>
    </div>
    ))
  }

  // console.log('Data yang diterima dari MovieList:', query);
  console.log(search);

  return (
  
    <div className=' bg-black h-full'>
    <div className='flex justify-between items-center px-20'>
     <h1 className='text-white text-[2rem] font-bold'>{datass}</h1>
     <a href='/dashboard' className='text-white absolute top-2 right-2 bg-red-500 p-2 rounded-full'>Back to Home</a>
 
    </div>
      <div className='flex flex-wrap justify-center text-center text-white'>
     {renderMovie()}
    
   </div>
   </div>
  );
}
