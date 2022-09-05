import axios from "axios";
import React, { useState, useEffect } from "react";


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
    <section className="relative grid lg:grid-col-16 -mt-[60px]">
      <div className="col-start-12 lg:col-start-7">
      <h3 className="text-xl invisible md:visible font-semibold sm:text-3xl lg:text-4xl mb-2 ">Cast:</h3>
      <div className="hidden md:flex">
        {cast.map((item, i) => {
          return (
            <div key={i}>
              <div className="max-w-xs flex-col justify-center rounded-xl p-3 -m-4 sm:px-10 ">
                <img
                  className="aspect-square object-center object-cover h-[9rem] w-32 rounded"
                  src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                  alt={item.name}
                />
                <div className="my-2 space-y-1">
                  <h2 className="text-center text-xl">
                    {item.name}
                  </h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}

export default CastList;
