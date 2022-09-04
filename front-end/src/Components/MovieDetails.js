import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CastList from "./CastList";

function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [genreArr, setGenre] = useState([]);
  const BASE_URL = "https://api.themoviedb.org/3/movie/";
  const KEY = process.env.REACT_APP_API_KEY;
  const API = process.env.REACT_APP_BACKEND_API_URL;

  const addMovie = (newMovie) => {
    axios
      .post(`${API}/watchlist`, newMovie)
      .then(() => navigate(`/`))
      .catch((err) => console.log(err));
  };

  const [item, setItem] = useState({
    title: "",
    genre: "",
    overview: "test",
    runtime: 0,
    tagline: "",
    rating: 0.0,
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}${id}?api_key=${KEY}&language=en-US`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    setGenre(
      movie?.genres.slice(0, 5).map((genre) => {
        return genre.name;
      })
    );
  }, [movie]);

  useEffect(() => {
    setItem({
      title: movie?.title,
      genre: genreArr?.[0],
      overview: movie?.overview,
      runtime: movie?.runtime,
      tagline: movie?.tagline,
      rating: movie?.vote_average,
      image: `https://image.tmdb.org/t/p/original${movie?.poster_path}`,
    });
  }, [movie, genreArr]);

  const handleClick = () => {
    addMovie(item);
  };

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
                {genre.name}
              </span>
            ))}
            <button className="ml-2 p-2 border-2 text-sm font-semibold" onClick={handleClick}> ADD TO WATCHLIST </button>
          </div>
          <div className="overview">{movie?.overview}</div>
          <h2>Cast</h2>
          <CastList id={movie?.id} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
