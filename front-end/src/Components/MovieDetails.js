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
    <section>
      <div
        className="h-[80vh] mt-8 w-full bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }")`,
        }}
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <img
            className="hidden lg:mt-[40vh] md:h-[750px] lg:col-span-5 lg:flex "
            src={`https://image.tmdb.org/t/p/original/${
              movie?.poster_path || movie?.backdrop_path
            }`}
            alt={movie?.title}
          />
          <div className="mr-auto md:ml-[80px] place-self-center mt-[70vh] lg:col-span-7 text-white">
            <div>
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                {movie?.title || movie?.name}
              </h1>
              <p className="max-w-2xl mb-6 font-ligh lg:mb-7 md:text-lg lg:text-xl">
                {movie?.overview}
              </p>
              <div>
                {movie?.genres.slice(0, 5).map((genre, i) => (
                  <span
                    className="border-2 rounded-full text-sm font-semibold content-fit inline-flex items-center justify-center lg:mb-7 px-5 py-3 mr-3 mt-1 text-center "
                    key={i}
                  >
                    {genre.name}
                  </span>
                ))}
                <button
                  className="border-2 text-sm font-semibold content-fit inline-flex items-center justify-center my-3 px-5 py-3 mr-3 text-center text-black bg-white hover:bg-gray-800 hover:text-white "
                  onClick={handleClick}
                >
                  ADD TO WATCHLIST{" "}
                </button>
              </div>
            </div>
            <h2>Cast</h2>
            <CastList id={movie?.id} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
