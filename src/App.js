/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
// 5b95e8ae
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "https://www.omdbapi.com/?apikey=5b95e8ae";

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};
const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState("Batman");
  const searchMovie = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    console.log("data", data.Search);
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie(searchTerm);
  }, [searchTerm]);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          //   onClick={(e) => setSearchTerm(e.target.value)}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovie(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
