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
  }, [id, KEY]);

  return (
    <section className="relative grid lg:grid-col-16 mt-10">
      <div className="col-start-12 lg:col-start-7">
        <h3 className="text-xl invisible md:visible font-semibold sm:text-3xl lg:text-4xl mb-4 ">
          Cast:
        </h3>
        <div className="hidden md:flex">
          {cast.map((item, i) => {
            return (
              <div key={i}>
                <div className="group max-w-xs flex-col justify-center rounded-xl p-3 -m-4 sm:px-10 ">
                  <img
                    className="object-center object-cover rounded"
                    src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
                    alt={item.name}
                    height={1080}
                    width={1920}
                  />
                  <div className=" text-center my-2 space-y-1">
                    <h2 className="text-center text-xl">{item.name}</h2>
                    <h5 className="opacity-0 group-hover:opacity-100 italic text-xs lg:text-base ">
                      {item.character}
                    </h5>
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
