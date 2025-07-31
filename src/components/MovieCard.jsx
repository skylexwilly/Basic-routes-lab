 // src/components/MovieCard.jsx
import React from "react";

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2> {/* This h2 must contain the movie title */}
      <p>Release Year: {movie.releaseYear}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
}

export default MovieCard;
