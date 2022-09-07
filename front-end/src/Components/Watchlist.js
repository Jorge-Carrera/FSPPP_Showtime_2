import React, { useState, useEffect } from "react";
import axios from "axios";
import WatchlistItem from "./WatchlistItem";

const API = process.env.REACT_APP_BACKEND_API_URL;

function Watchlist({watchlistArr}) {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/watchlist`)
      .then((res) => setWatchlist(res.data.payload))
      .catch((err) => console.log(err));
  }, [watchlist]);

  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {watchlist.map((item, id) => {
        return <WatchlistItem key={id} item={item} watchlistArr={watchlistArr} />;
      })}
    </div>
  );
}

export default Watchlist;
