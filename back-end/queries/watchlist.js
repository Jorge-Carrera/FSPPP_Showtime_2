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
    const { title, genre, overview, runtime, tagline, rating, image } = movie;
    const newMovie = await db.one(
      `INSERT INTO watchlist (title, genre, overview, runtime, tagline, rating, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [title, genre, overview, runtime, tagline, rating, image]
    );
    return newMovie;
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
    return deletedMovie;
  } catch (error) {
    return error;
  }
};

const updateMovie = async (movie, id) => {
  try {
    const { title, genre, overview, runtime, tagline, rating, image } = movie;
    const updatedMovie = await db.one(
      `UPDATE watchlist SET title = $1, genre = $2, overview = $3, runtime = $4, tagline = $5, rating = $6, image = $7 WHERE id = $8 RETURNING *`,
      [title, genre, overview, runtime, tagline, rating, image, id]
    );
    return updatedMovie
  } catch (error) {
    return error
  }
};

module.exports = { getMovie, getAllMovies, createMovie, deleteMovie, updateMovie };
