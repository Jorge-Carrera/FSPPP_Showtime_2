import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function WatchlistItem({ item }) {
  const id = item.id;
  const API = process.env.REACT_APP_BACKEND_API_URL;

  const handleDelete = () => {
    axios
      .delete(`${API}/watchlist/${id}`)
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-2 mb-5 transition duration-200 ease-in transform sm:hover:scale-100 hover:z-50 group">
      <img src={item.image} height={1080} width={1920} />
      <div className="p-2">
        <h2 className="mt-1 mb-1.5 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold ">
          {item.title}
        </h2>
        <p className="italic mb-2">{item.tagline || "~ No tagline ~"}</p>
        <p className="border-2 rounded-full text-sm font-semibold w-fit p-1.5 mb-2">
          Genre: {item.genre}
        </p>
        <p className="text-xl">Overview:</p>
        <p className="max-w-md mb-2 truncate md:whitespace-normal">
          {" "}
          {item.overview}
        </p>
        <p className="flex items-center font-bold">
          Runtime: {item.runtime} minutes
        </p>
        <p className="font-bold">Rating: {item.rating}</p>
      </div>
      <button
        className="border-2 text-sm font-semibold w-fit p-1 cursor-pointer mt-2 bg-[#E41F1D] hover:bg-red-800"
        onClick={handleDelete}
      >
        Remove From List
      </button>
      <Link to={`/watchlist/${id}/edit`}>
        <button className="border-2 text-sm font-semibold w-fit p-1 cursor-pointer mt-2 ml-2 bg-gray-700 hover:bg-gray-800">
          Edit Movie Info
        </button>
      </Link>
    </div>
  );
}

export default WatchlistItem;
