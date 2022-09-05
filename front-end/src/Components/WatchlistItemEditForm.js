import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_BACKEND_API_URL;

function WatchlistItemEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({
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
      .get(`${API}/watchlist/${id}`)
      .then((res) => setMovie(res.data.payload))
      .catch((err) => console.log(err));
  }, [id]);

  const updateMovie = (updatedMovie) => {
    axios
      .put(`${API}/watchlist/${id}`, updatedMovie)
      .then(() => {
        navigate("/watchlist");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie(movie);
  };

  return (
    <section className="p-6 dark:text-gray-50 lg:mt-[10vh]">
      <form
        noValidate=""
        onSubmit={handleSubmit}
        className="container mx-auto flex flex-col space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 rounded-md p-6 shadow-sm ">
          <div className="col-span-full space-y-2 lg:col-span-1">
            <p className="font-medium lg:text-2xl">
              Update Movie Information :
            </p>
            <p className="text-xs md:text-sm">
              Please note, this information will only be visible to you, on your
              personal watchlist.
            </p>
          </div>
          <div className="col-span-full grid grid-cols-6 gap-4 lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="movie-title" className="text-sm">
                Title
              </label>
              <input
                id="movie-title"
                type="text"
                value={movie.title}
                onChange={handleChange}
                placeholder="Movie Title"
                className="w-full rounded-md focus:ring focus:ring-red-600 focus:ring-opacity-75  text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="genre" className="text-sm">
                Genre
              </label>
              <input
                id="genre"
                type="text"
                value={movie.genre}
                onChange={handleChange}
                placeholder="Movie Genre"
                className="w-full rounded-md focus:ring focus:ring-red-600 focus:ring-opacity-75 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-full">
              <label htmlFor="tagline" className="text-sm">
                Tagline
              </label>
              <input
                id="tagline"
                type="text"
                value={movie.tagline}
                onChange={handleChange}
                placeholder="Movie Tagline"
                className="w-full rounded-md focus:ring focus:ring-red-600 focus:ring-opacity-75 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="runtime" className="text-sm">
                Runtime
              </label>
              <input
                id="runtime"
                type="number"
                value={movie.runtime}
                onChange={handleChange}
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-red-600 focus:ring-opacity-75 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="rating" className="text-sm">
                Rating
              </label>
              <input
                id="rating"
                type="number"
                min="0.00"
                step="0.01"
                max="9.99"
                value={movie.rating}
                onChange={handleChange}
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-red-600 focus:ring-opacity-75 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="overview" className="text-sm">
                Overview
              </label>
              <textarea
                id="overview"
                value={movie.overview}
                onChange={handleChange}
                placeholder="Movie Overview..."
                className="w-full resize-y rounded-md focus:ring focus:ring-red-600 focus:ring-opacity-75 text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label htmlFor="image" className="text-sm">
                Movie Poster
              </label>
              <div className="flex items-center space-x-5">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-30 w-40 rounded-full bg-cover bg-center dark:bg-gray-700"
                />
                <button
                  type="submit"
                  className="rounded-md border px-4 py-2 dark:border-gray-100"
                >
                  Submit Changes
                </button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default WatchlistItemEditForm;
