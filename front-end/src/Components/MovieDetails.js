import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CastList from "./CastList";
import { currencyFormatter } from "../utils/formatters";

function MovieDetails({ watchlistArr }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [genreArr, setGenreArr] = useState([]);
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
    overview: "",
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
  }, [id, KEY]);

  useEffect(() => {
    setGenreArr(
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
    const isMovieInWatchlist = watchlistArr.some((x) => x === item.title);
    if (isMovieInWatchlist) {
      alert("This movie is already in your watchlist");
    } else {
      watchlistArr.push(item.title);
      addMovie(item);
      console.log(item)
    }
  };

  return (
    <section>
      <div
        className="h-[80vh] mt-8 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }")`,
        }}
      >
        <div className="absolute w-full h-[80vh] bg-gradient-to-t from-black "></div>
        <div className=" relative grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <img
            className="hidden pl-16 lg:mt-[50vh] md:h-[850px] lg:col-span-5 lg:flex "
            src={`https://image.tmdb.org/t/p/original/${
              movie?.poster_path || movie?.backdrop_path
            }`}
            alt={movie?.title}
          />
          <div className="mr-auto md:ml-[30px] place-self-center mt-[47vh] lg:mt-[70vh] lg:col-span-7 text-white">
            <div>
              <h1 className="max-w-2xl  mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                {movie?.title || movie?.name}
              </h1>
              <p className="max-w-2xl mb-6 font-ligh lg:mb-7 md:text-lg lg:text-xl">
                {movie?.overview}
              </p>
              <div>
                {movie?.genres.slice(0, 5).map((genre, i) => (
                  <span
                    className="border-2 rounded-full text-sm font-semibold content-fit inline-flex items-center justify-center lg:mb-7 px-5 py-3 mr-3 mt-1 text-center"
                    key={i}
                  >
                    {genre.name}
                  </span>
                ))}
                <button
                  className="border-2 text-sm font-semibold content-fit inline-flex items-center justify-center my-3 px-5 py-3 mr-3 text-center text-black bg-white hover:bg-[#E41F1D] hover:text-white "
                  onClick={handleClick}
                >
                  ADD TO WATCHLIST{" "}
                </button>
              </div>
              <div className="justify-evenly items-center h-auto text-xl">
                <p>Status: {movie?.status}</p>
                <p>Release Date: {movie?.release_date}</p>
                <p>
                  Budget: {currencyFormatter.format(movie?.budget) || "N/A"}
                </p>
                <p>
                  Revenue: {currencyFormatter.format(movie?.revenue) || "N/A"}
                </p>
              </div>
            </div>
            <CastList id={movie?.id} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
