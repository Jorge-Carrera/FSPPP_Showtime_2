const db = require("../db/dbConfig.js");

const getAllMovies = async () => {
  try {
    const allMovies = await db.any("SELECT * FROM watchlist");
    return allMovies;
  } catch (error) {
    return error;
  }
};

const getMovie = async (id) => {
  try {
    const oneMovie = await db.oneOrNone(
      "SELECT * FROM watchlist WHERE id = $1",
      id
    );
    return oneMovie;
  } catch (error) {
    return error;
  }
};

const createMovie = async (movie) => {
  try {
    const { title, genre, overview, director, image } = watchlist;
    const newWatchlist = await db.one(
      `INSERT INTO watchlist (title, genre, overview, director, image) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, genre, overview, director, image]
    );
    return newWatchlist;
  } catch (error) {
    return error;
  }
};

const deleteMovie = async (id) => {
  try {
    const deletedMovie = await db.one(
      `DELETE FROM watchlist WHERE id = $1 RETURNING *`,
      id
    );
  } catch (error) {
    return error;
  }
};

module.exports = { getMovie, getAllMovies, createMovie, deleteMovie };
