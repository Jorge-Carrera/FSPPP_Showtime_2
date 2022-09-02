import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CastList({ id }) {
  const KEY = process.env.REACT_APP_API_KEY;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
      )
      .then((res) => setCast(res.data.cast.slice(0, 5)))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="casts">
      {cast.map((item, i) => {
        return (
          <div key={i}>
            <div>
              {/* <img
                src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                height={1080}
                width={1920}
              /> */}
            </div>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CastList;
