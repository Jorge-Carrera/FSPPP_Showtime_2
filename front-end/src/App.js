import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import requests from "./utils/requests";

//Components
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";


// Pages
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";

function App() {
  const [selected, setSelected] = useState(requests.fetchTrending.url);

  return (
    <div>
      <Router>
        <Header />
        <Navbar setSelected={setSelected} />
        <Routes>
          <Route exact path="/" element={<Home selected={selected} />} />
          <Route exact path="/movie/:id" element={<Show />} />
          <Route exact path="/watchlist" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
