import React, { useState, useEffect } from "react";
import { Movie } from "../DataType/movieTypes";

interface ActorMovieListPageProps {
  link: { link: string; IndividualMoviePage: string };
}

const ActorMovieListPage = (props: ActorMovieListPageProps) => {
  const [movies, setMovies] = useState<any[]>([]); // Using any for simplicity; you should define a proper type
  const [loading, setLoading] = useState(true);
  const [selectedMovieContent, setSelectedMovieContent] =
    useState<JSX.Element | null>(null);

  useEffect(() => {
    import(`../${props.link.link}.tsx`)
      .then((module) => {
        setMovies(module.default || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load movie data:", error);
        setLoading(false);
      });
  }, [props.link]);

  const loadMovieContent = (movie: Movie) => {
    if (!props.link.IndividualMoviePage) {
      console.error(`Movie path not provided for movie ID: ${movie.id}`);
      return;
    }

    import(`../${props.link.IndividualMoviePage}.tsx`)
      .then((module) => {
        setSelectedMovieContent(module.default());
      })
      .catch((error) => {
        console.error("Failed to load individual movie content:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Actor Movie List Page</h1>

      {selectedMovieContent ? (
        selectedMovieContent
      ) : (
        <>
          <ul>
            {movies.map((movie) => {
              return (
                <li style={{ listStyle: "none" }} key={movie.title}>
                  <h2
                    style={{ cursor: "pointer" }}
                    onClick={() => loadMovieContent(movie)}>
                    {movie.title}
                  </h2>
                  <p>{movie.spoiler}</p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default ActorMovieListPage;
