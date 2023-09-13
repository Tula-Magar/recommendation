import React from "react";
import { Movie } from "./movieTypes";

const MovieDetail: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      {movie.imagesAndText.map((imageAndText, index) => (
        <div key={index}>
          <img src={imageAndText.posterURL} alt={`Image ${index}`} />
          <p>{imageAndText.text}</p>
        </div>
      ))}
      {/* Add more details about the movie here */}
    </div>
  );
};

export default MovieDetail;
