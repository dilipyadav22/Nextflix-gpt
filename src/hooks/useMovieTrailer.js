import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_options } from '../utils/constant';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getVideoById = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_options
      );
      const json = await data.json();
  
      const filterData = json.results.filter((res) => res.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      getVideoById();
    }, []);
  return (
    <div></div>
  )
}

export default useMovieTrailer;