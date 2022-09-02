import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CastList from "./CastList";

function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const BASE_URL = "https://api.themoviedb.org/3/movie/";
  const KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(`${BASE_URL}${id}?api_key=${KEY}&language=en-US`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
      <img
        className="w-full h-full object-cover mt-8"
        src={`https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }`}
        alt={movie?.title}
      />
      <div className="items-start max-w-[1260px] ml-auto mr-auto mt-[-200px] relative pt-8">
        <div className="">
          <img
            className="rounded-lg bg-center bg-cover md:h-[476px] "
            src={`https://image.tmdb.org/t/p/original/${
              movie?.poster_path || movie?.backdrop_path
            }`}
            alt={movie?.title}
          />
          <h1 className="">{movie?.title || movie?.name}</h1>
          <div className="pt-6 ml-8">
            {movie?.genres.slice(0, 5).map((genre, i) => (
              <span
                className="ml-2 p-2 border-2 rounded-full text-sm font-semibold"
                key={i}
              >
                {genre?.name}
              </span>
            ))}
          </div>
          <div className="overview">{movie?.overview}</div>
          <h2>
            Cast
            {console.log(id)}
          </h2>
          <CastList id={movie?.id} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
