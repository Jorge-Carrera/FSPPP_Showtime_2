import React from "react";
import { Link } from "react-router-dom";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

function Movie({ result }) {
  const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className=" p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50  group cursor-pointer">
      <Link to={`/movie/${result.id}`}>
        <img
          src={`
          ${BASE_IMG_URL}${result.backdrop_path || result.poster.path}`}
          height={1080}
          width={1920}
        />
        <div className="p-2">
          <p className="truncate max-w-md">{result.overview}</p>
          <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold ">
            {result.title || result.original_name}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {" "}
            Released: 🎬 {result.release_date || result.first_air_date} {" "}
            <HandThumbUpIcon className="h-5 mx-2" /> {result.vote_count}{" "}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
