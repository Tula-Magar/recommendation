import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MovieDetail from "./MovieDetails";
import { movies } from "./movieData";
import { Movie } from "./movieTypes";

function MovieDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate(); // Get the navigate function to handle navigation

  // Find the index of the current movie in the list
  const currentIndex = movies.findIndex((movie) => movie.id === Number(id));

  // Calculate the index of the next and previous movies
  const nextIndex = (currentIndex + 1) % movies.length; // Wrap around to the first movie
  const prevIndex = (currentIndex - 1 + movies.length) % movies.length; // Wrap around to the last movie

  // Get the next and previous movies
  const nextMovie = movies[nextIndex];
  const prevMovie = movies[prevIndex];

  const movie = (movies.find((movie) => movie.id === Number(id)) || {
    id: 0,
    title: "Not Found",
    genre: "N/A",
    imagesAndText: [],
    Page: "",
  }) as Movie;

  // Function to navigate to the previous movie
  const goToPreviousMovie = () => {
    navigate(`/movie/${prevMovie.id}`);
  };

  // Function to navigate to the next movie
  const goToNextMovie = () => {
    navigate(`/movie/${nextMovie.id}`);
  };

  return (
    <div>
      <h1>Movie Detail Page</h1>
      <div className="navigation-buttons">
        <button onClick={() => window.history.back()}>Back</button>
        <button onClick={() => window.history.forward()}>Forward</button>
      </div>

      {/* Style these as buttons */}
      <button className="previous-movie" onClick={goToPreviousMovie}>
        Previous
      </button>

      <button onClick={goToNextMovie}>Next</button>

      {movie.Page ? (
        (() => {
          const MoviePageComponent = require(`./${movie.Page}`).default;
          return <MoviePageComponent />;
        })()
      ) : (
        <MovieDetail movie={movie} />
      )}

      {/* Style these as buttons */}
      <button className="previous-movie" onClick={goToPreviousMovie}>
        Previous
      </button>

      <button onClick={goToNextMovie}>Next</button>
    </div>
  );
}

export default MovieDetailPage;
