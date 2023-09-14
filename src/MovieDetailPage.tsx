import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "./MovieDetails"; // Import your MovieDetail component
import { movies } from "./movieData"; // Import your movieData
import { Movie } from "./movieTypes"; // Import your Movie type

function MovieDetailPage() {
  const { id } = useParams();

  // Find the movie with the given ID or set default values if not found
  const movie = (movies.find((movie) => movie.id === Number(id)) || {
    id: 0,
    title: "Not Found",
    genre: "N/A",
    imagesAndText: [],
    Page: "", // Set to an empty string if the movie doesn't have a page
  }) as Movie;

  return (
    <div>
      <h1>Movie Detail Page</h1>
      {movie.Page ? (
        // Dynamically import and render the movie.Page component
        (() => {
          const MoviePageComponent = require(`./${movie.Page}`).default;
          return <MoviePageComponent />;
        })()
      ) : (
        <MovieDetail movie={movie} />
      )}
    </div>
  );
}

export default MovieDetailPage;
