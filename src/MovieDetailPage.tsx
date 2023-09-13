import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "./MovieDetails"; // Import your MovieDetail component
import { movies } from "./movieData"; // Import your movieData
import { Movie } from "./movieTypes"; // Import your Movie type

function MovieDetailPage() {
  const { id } = useParams();

  const movie = (movies.find((movie) => movie.id === Number(id)) || {
    id: 0,
    title: "Not Found",
    genre: "N/A",
    imagesAndText: [],
  }) as Movie; // Use type assertion to specify the type as Movie

  return (
    <div>
      <h1>Movie Detail Page</h1>
      <MovieDetail movie={movie} /> {/* Pass the movie prop */}
    </div>
  );
}

export default MovieDetailPage;
