import React from "react";
import { Link } from "react-router-dom";
import requests from "../utils/requests";

function Navbar({ setSelected }) {
  return (
    <nav className="relative">
      <Link to="/">
        <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
          {Object.entries(requests).map(([key, { title, url }]) => (
            <h2
              key={key}
              onClick={() => setSelected(url)}
              className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-[#E41F1D] last:pr-24"
            >
              {title}
            </h2>
          ))}
        </div>
      </Link>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
}

export default Navbar;
