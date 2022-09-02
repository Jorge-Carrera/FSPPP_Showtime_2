DROP DATABASE IF EXISTS showtime;
CREATE DATABASE showtime;

\c showtime;

DROP TABLE IF EXISTS watchlist;

CREATE TABLE watchlist (
    id SERIAL PRIMARY KEY, 
    title TEXT, 
    genre TEXT,
    overview TEXT,
    runtime INTEGER,
    tagline TEXT,
    rating DECIMAL(3,2),
    image TEXT
);
