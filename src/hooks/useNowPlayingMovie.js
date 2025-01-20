import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/constant";



const useNowPlayingMovie=()=>{


  const dispatch = useDispatch()

const getNowPlayingMovieData = async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_options );
  const res = await data.json();
  dispatch(addNowPlayingMovie(res.results));
};

useEffect(() => {
 getNowPlayingMovieData();
}, [])


}


export default useNowPlayingMovie;
