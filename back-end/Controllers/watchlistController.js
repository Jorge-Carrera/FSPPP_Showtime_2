const express = require('express');
const watchlist = express.Router();

const {
  getAllMovies, 
  getMovie,
  createWatchlist, 
  deleteMovie
} = require('../queries/watchlist');


watchlist.get('/', async (req, res) => {
  const allMovies = await getAllMovies(); 
  if(allMovies[0]) {
    res.status(200).json({payload: allMovies, success:true});
  } else {
    res.status(500).json({payload: 'error', success: false , error: 'error'});
  }
});

watchlist.get('/:id', async (req, res) => {
  const { id } = req.params; 
  const movie = await getMovie(id);
  if(movie) {
    res.json({payload: movie, success: true});
  } else {
    res.status(404).json({payload: 'not found', success: false , error: 'Movie not found'});
  }
}); 

watchlist.post('/', async (req, res) => {
  const createdWatchlist = await createWatchlist(req.body); 
  if(createdWatchlist.id) {
    res.status(200).json({payload:createdWatchlist, success: true});
  } else {
    res.status(422).json({payload: 'unprocessable entity', success: false, error: 'unprocessable entity'})
  }
}); 

watchlist.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedMovie = await deleteMovie(id); 
  if(deletedMovie.id) {
    res.status(200).json({payload:deletedMovie, success:true})
  } else {
    res.status(404).json({payload: 'not found', success:false, error: "Movie not found"})
  }
}); 

module.exports = watchlist
