import React, { useState } from "react";
import "./App.css";

const movies = [
  { id: 1, title: "Movie 1", genre: "Action" },
  { id: 2, title: "Movie 2", genre: "Comedy" },
  { id: 3, title: "Movie 3", genre: "Drama" },
  { id: 4, title: "Movie 4", genre: "Action" },
  { id: 5, title: "Movie 5", genre: "Comedy" },
  { id: 6, title: "Movie 6", genre: "Drama" },
  { id: 7, title: "Movie 7", genre: "Action" },
  { id: 8, title: "Movie 8", genre: "Comedy" },
  { id: 9, title: "Movie 9", genre: "Drama" },
  { id: 10, title: "Movie 10", genre: "Action" },
  { id: 11, title: "Movie 11", genre: "Comedy" },
  { id: 12, title: "Movie 12", genre: "Drama" },
  { id: 13, title: "Movie 13", genre: "Action" },
  { id: 14, title: "Movie 14", genre: "Comedy" },
  { id: 15, title: "Movie 15", genre: "Drama" },
  { id: 16, title: "Movie 16", genre: "Action" },
  { id: 17, title: "Movie 17", genre: "Comedy" },
  { id: 18, title: "Movie 18", genre: "Drama" },
  { id: 19, title: "Movie 19", genre: "Action" },
  { id: 20, title: "Movie 20", genre: "Comedy" },
  { id: 21, title: "Movie 21", genre: "Drama" },
  { id: 22, title: "Movie 22", genre: "Action" },
  { id: 23, title: "Movie 23", genre: "Comedy" },
  { id: 24, title: "Movie 24", genre: "Drama" },
  { id: 25, title: "Movie 25", genre: "Action" },
  { id: 26, title: "Movie 26", genre: "Comedy" },
  { id: 27, title: "Movie 27", genre: "Drama" },
  { id: 28, title: "Movie 28", genre: "Action" },
  { id: 29, title: "Movie 29", genre: "Comedy" },
  { id: 30, title: "Movie 30", genre: "Drama" },
  { id: 31, title: "Movie 31", genre: "Action" },
  { id: 32, title: "Movie 32", genre: "Comedy" },
  { id: 33, title: "Movie 33", genre: "Drama" },
  { id: 34, title: "Movie 34", genre: "Action" },
  { id: 35, title: "Movie 35", genre: "Comedy" },
  { id: 36, title: "Movie 36", genre: "Drama" },
  { id: 37, title: "Movie 37", genre: "Action" },
  { id: 38, title: "Movie 38", genre: "Comedy" },
  { id: 39, title: "Movie 39", genre: "Drama" },
  { id: 40, title: "Movie 40", genre: "Action" },
  { id: 41, title: "Movie 41", genre: "Comedy" },
  { id: 42, title: "Movie 42", genre: "Drama" },
  { id: 43, title: "Movie 43", genre: "Action" },
  { id: 44, title: "Movie 44", genre: "Comedy" },
  { id: 45, title: "Movie 45", genre: "Drama" },
  { id: 46, title: "Movie 46", genre: "Action" },
  { id: 47, title: "Movie 47", genre: "Comedy" },
  { id: 48, title: "Movie 48", genre: "Drama" },
  { id: 49, title: "Movie 49", genre: "Action" },
  { id: 50, title: "Movie 50", genre: "Comedy" },
  // Add more movie data
];

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
              onClick={() => handleGenreChange(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        <div className="movie-list">
          {visibleMovies.map((movie) => (
            <div className="movie" key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Genre: {movie.genre}</p>
            </div>
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
