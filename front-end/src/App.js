import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import requests from "./utils/requests";
import axios from "axios";

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
import PricingPlans from "./Pages/PricingPlans";

function App() {
  const [selected, setSelected] = useState(requests.fetchTrending.url);
  let watchlistArr = []
  const API = process.env.REACT_APP_BACKEND_API_URL;

  return (
    <div>
      <Router>
        <Header setSelected={setSelected} />
        <Navbar setSelected={setSelected} />
        <Routes>
          <Route exact path="/" element={<Home selected={selected} />}/>
          <Route exact path="/movie/:id" element={<Show watchlistArr={watchlistArr} />} />
          <Route exact path="/watchlist" element={<Index watchlistArr={watchlistArr} />} />
          <Route exact path="/watchlist/:id/edit" element={<Edit />} />
          <Route exact path='/pricingplans' element={<PricingPlans />} />
          <Route exact path='/construction' element={<UnderConstruction />} />
          <Route path='*' element={<FourOFour/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
