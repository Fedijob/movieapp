import React from "react";
import AddMovie from "./AddMovie";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, setMovies, text, rating }) => {
  return (
    <>
      <AddMovie movies={movies} setMovies={setMovies} />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "100px",
        }}
      >
        {movies
          .filter(
            (el) =>
              el.name.toLowerCase().includes(text.toLowerCase()) &&
              el.rating >= rating
          )
          .map((movie) => <MovieCard movie={movie} />)
          .reverse()}
        
      </div>
    </>
  );
};

export default MovieList;
