 import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Home() {
  const [movies, setMovies] = useState([]); // ✅ Initialize with []

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Failed to fetch movies:", err));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Home;
