import { Link } from "react-router-dom";
import { movies } from "./movieData"; // Replace 'yourDataFile' with the actual path
import { type } from "os";

type RelatedLinksProps = {
  currentMovieId: number;
};

const RelatedLinks = ({ currentMovieId }: RelatedLinksProps) => {
  const currentMovie = movies.find((movie) => movie.id === currentMovieId);

  if (!currentMovie) return null;

  const relatedMovies = movies
    .filter(
      (movie) =>
        movie.genre === currentMovie.genre && movie.id !== currentMovie.id
    )
    .slice(0, 5);

  return (
    <div>
      <h4>Related Movies:</h4>
      <ul>
        {relatedMovies.map((movie) => (
          <li className="relatedMoviesList" key={movie.id}>
            <Link className="link" to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedLinks;
