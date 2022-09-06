import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

const BASE_URL = "https://api.themoviedb.org/3";

function Movies({ selected }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${selected}`)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [selected]);

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {movies.map((result) => (
        <Movie key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Movies;
