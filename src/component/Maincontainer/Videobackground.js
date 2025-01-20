import React  from "react";

import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const Videobackground = ({ movieId }) => {
  const trailer = useSelector(store =>store.movie?.trailerVideo);
  useMovieTrailer(movieId);


  return (
    <div className="" >
      <iframe
       className="w-full aspect-video "
        src={"https://www.youtube.com/embed/"+ trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
