import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitel from './VideoTitel';
import Videobackground from './Videobackground';

const Main = () => {

    const movie = useSelector(store =>store.movie?.addNowPlayingMovie);

    if(!movie) return null;

    const mainmovie = movie[0];

    const {  original_title , overview, id} = mainmovie;

  return (
    <div >
        <VideoTitel titel= {original_title}  overview ={overview} />
        <Videobackground  movieId = {id} />
    </div>
  )
}

export default Main