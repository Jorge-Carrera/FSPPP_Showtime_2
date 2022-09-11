import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import requests from "./utils/requests";
import { UserContext, UserProvider } from "./Providers/UserProvider";

//Components
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

// Pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import UnderConstruction from "./Pages/UnderConstruction";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [selected, setSelected] = useState(requests.fetchTrending.url);
  let watchlistArr = []
  const user = true


  return (
    <div>
      <UserProvider>
      <Router>
        {!user ? (
          <LandingPage />
        ): (
          <>
          <Header setSelected={setSelected} />
          <Navbar setSelected={setSelected} />
          <Routes>
          <Route exact path="/" element={<Home selected={selected} />}/>
          <Route exact path="/movie/:id" element={<Show watchlistArr={watchlistArr} />} />
          <Route exact path="/watchlist" element={<Index watchlistArr={watchlistArr} />} />
          <Route exact path="/watchlist/:id/edit" element={<Edit />} />
          <Route exact path='/construction' element={<UnderConstruction />} />
          <Route path='*' element={<FourOFour/>}/>
        </Routes>
        </>
        )}
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
