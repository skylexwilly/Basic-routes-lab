 import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function Actors() {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/actors")
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch actors");
        return r.json();
      })
      .then(setActors)
      .catch((err) => {
        console.error("Error fetching actors:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {actors.map((actor) => (
        <article key={actor.name}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
