import React from "react";
import { Movie } from "../DataType/movieTypes";

const MovieDetail: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h2 className="test">{movie.title ? movie.title : ""}</h2>
      <p>{movie.genre ? "Genre: " + movie.genre : ""}</p>
      {movie.imagesAndText ? (
        movie.imagesAndText.map((imageAndText, index) => (
          <div key={index}>
            <img src={imageAndText.posterURL} alt={` not ${index}`} />
            <p>{imageAndText.text}</p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MovieDetail;
