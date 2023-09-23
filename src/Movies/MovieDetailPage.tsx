import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieDetail from "./MovieDetails";
import { movies } from "../Data/movieData";
import { Movie } from "../DataType/movieTypes";
import ActorMovieListPage from "../ActorMovieList/ActorMovieListPage";

function MovieDetailPage() {
  const [isIndividualMovieSelected, setIndividualMovieSelected] =
    useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const currentIndex = movies.findIndex((movie) => movie.id === Number(id));
  const nextIndex = (currentIndex + 1) % movies.length;
  const prevIndex = (currentIndex - 1 + movies.length) % movies.length;
  const nextMovie = movies[nextIndex];
  const prevMovie = movies[prevIndex];

  const movie = (movies.find((movie) => movie.id === Number(id)) || {
    id: 0,
    title: "Not Found",
    genre: "N/A",
    imagesAndText: [],
    IndividualMoviePage: "Not Found",
    Page: "",
  }) as Movie;

  const goToPreviousMovie = () => {
    navigate(`/movie/${prevMovie.id}`);
  };

  const goToNextMovie = () => {
    navigate(`/movie/${nextMovie.id}`);
  };

  return (
    <div>
      <h1>Movie Detail Page</h1>

      {!isIndividualMovieSelected && (
        <>
          <button className="previous-movie" onClick={goToPreviousMovie}>
            Previous
          </button>
          <button onClick={goToNextMovie}>Next</button>
        </>
      )}

      {movie.Page ? (
        <ActorMovieListPage
          link={{
            link: movie.Page,
            IndividualMoviePage: movie.IndividualMoviePage,
          }}
          OnMovieClick={() => setIndividualMovieSelected(true)}
        />
      ) : (
        <MovieDetail movie={movie} />
      )}
      {!isIndividualMovieSelected && (
        <>
          <button className="previous-movie" onClick={goToPreviousMovie}>
            Previous
          </button>
          <button onClick={goToNextMovie}>Next</button>
        </>
      )}
    </div>
  );
}

export default MovieDetailPage;
