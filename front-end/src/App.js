import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import requests from './utils/requests'



//Components 
import Header from './Components/Header'
import MovieDetails from './Components/MovieDetails'
import Navbar from './Components/Navbar'
import Watchlist from './Components/Watchlist'

// Pages 
import Home from './Pages/Home'
// import Index from './Pages/Index'


function App() {
  const [ selected, setSelected ] = useState(requests.fetchTrending.url)

  return (
    <div>
      <Router>
        <Header/>
        <Navbar setSelected={setSelected}/>
      <Routes>
      <Route exact path="/" element={<Home selected={selected} />} />
      <Route exact path="/movie/:id" element={<MovieDetails /> } />
      <Route exact path="/watchlist" element={<Watchlist /> } />
      </Routes>
      </Router>
    </div>
    
  )
}

export default App
