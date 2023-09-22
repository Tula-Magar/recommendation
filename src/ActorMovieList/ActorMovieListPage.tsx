import React, { useState, useEffect } from "react";
import { ActorMovieListPageType } from "./ActorMovieListPageType";

interface ActorMovieListPageProps {
  link: { link: string };
}

const ActorMovieListPage = (props: ActorMovieListPageProps) => {
  const [movies, setMovies] = useState<ActorMovieListPageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically import the data
    import(`../${props.link.link}.tsx`)

      .then((module) => {
        setMovies(module.default || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load movie data:", error);
        setLoading(false);
      });
  }, [props.link]); // Dependency array ensures data is fetched only when link prop changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Actor Movie List Page</h1>
      <ul>
        {movies.map((movie) => (
          <li style={{ listStyle: "none" }} key={movie.title}>
            <h2>{movie.title}</h2>
            <p>{movie.spoiler}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActorMovieListPage;
