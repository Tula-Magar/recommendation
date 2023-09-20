import React from "react";

interface ActorMovieListPageProps {
  movies: { title: string; spoiler: string }[];
}

const ActorMovieListPage = (props: ActorMovieListPageProps) => {
  return (
    <div>
      <h1>Actor Movie List Page</h1>
      <ul>
        {props.movies &&
          props.movies.map((movie) => (
            <li key={movie.title}>
              <h2>{movie.title}</h2>
              <p>{movie.spoiler}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ActorMovieListPage;
