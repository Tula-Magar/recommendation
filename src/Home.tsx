import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { movies } from "./movieData";

const ITEMS_PER_PAGE = 20;

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const genres = ["All", "Action", "Comedy", "Drama"]; // List of genres

  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleMovies = filteredMovies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    setCurrentPage(1); // Reset page to 1 when changing genre
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Movie Recommendation Website</h1>
      </header>
      <main className="main">
        <div className="genres">
          {genres.map((genre) => (
            <button
              key={genre}
              className={selectedGenre === genre ? "active" : ""}
              onClick={() => handleGenreChange(genre)}>
              {genre}
            </button>
          ))}
        </div>
        <div data-testid="movie-item" className="movie-list">
          {visibleMovies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`} // Link to the movie details page
              key={movie.id}
              className="movie"
              data-testid="movie-item">
              <h2>{movie.title}</h2>
              <p>Genre: {movie.genre}</p>
            </Link>
          ))}
        </div>
        <br />
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
