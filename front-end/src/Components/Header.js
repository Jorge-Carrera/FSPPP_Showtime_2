import React from "react";
import HeaderItem from "./HeaderItem";
import {
  RectangleStackIcon,
  HomeIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import requests from "../utils/requests";

function Header({ setSelected }) {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Link to="/">
          <div onClick={() => setSelected(requests.fetchTrending.url)}>
            <HeaderItem title={"HOME"} Icon={HomeIcon} />
          </div>
        </Link>
        <Link to="/construction">
          <HeaderItem title={"PLANS"} Icon={BoltIcon} />
        </Link>
        <Link to="/watchlist">
          <HeaderItem title={"WATCHLIST"} Icon={RectangleStackIcon} />
        </Link>
        <Link to="/construction">
        <HeaderItem title={"SEARCH"} Icon={MagnifyingGlassIcon} />
        </Link>
        <Link to="/construction">
        <HeaderItem title={"ACCOUNT"} Icon={UserIcon} />
        </Link>
      </div>
      <img
        className="object-contain"
        src="https://logodownload.org/wp-content/uploads/2021/05/showtime-logo-1.png"
        alt="showtime logo"
        height={100}
        width={150}
      ></img>
    </header>
  );
}

export default Header;
