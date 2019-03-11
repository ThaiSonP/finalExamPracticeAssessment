DROP DATABASE IF EXISTS films;
CREATE DATABASE films;

\c films;

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  movie_genre VARCHAR NOT NULL
);

CREATE TABLE movies (
  id serial primary key,
  title VARCHAR NOT NULL,
  genre INT REFERENCES genres (id) NOT NULL,
  img_url VARCHAR
);

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  stars INT NOT NULL,
  movie_id INT REFERENCES movies(id) NOT NULL
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  statement VARCHAR,
  movie_id INT REFERENCES movies(id) NOT NULL
);
