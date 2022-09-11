import React, { useState } from "react";
import SignIn from "../Components/SignIn";
import masthead from "../masthead.jpeg";

function LandingPage() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="relative h-full bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${masthead})`,
      }}
    >
      <div className="">
        <img
          className="object-contain fixed left-0 pl-5 pt-5"
          src="https://logodownload.org/wp-content/uploads/2021/05/showtime-logo-1.png"
          alt="showtime logo"
          width={150}
        />
        <button
          className="fixed top-5 right-5 text-base text-white bg-[#E41F1D] px-5 py-2.5 font-semibold border-none cursor-pointer"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <div className="w-full h-[100vh] bg-black/30 bg-gradient-to-t from-black " />
      </div>
      <div className="z-[1] text-white p-5 absolute inset-0 mt-[30vh] text-center">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1 className="text-5xl font-semibold mb-5">
              All the magic of Hollywood, at the tip of your fingers.
            </h1>
            <h2 className="text-3xl mb-7">
              Watch anywhere. Cancel at anytime.
            </h2>
            <button
              className="px-2.5 py-2.5 text-white font-medium bg-[#E41F1D]"
              onClick={() => setSignIn(true)}
            >
              {" "}
              GET STARTED{" "}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
