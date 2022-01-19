import React, { useState, useEffect } from "react";
import MoviePoster from "../components/moviePoster";
import Nav from "../components/Navigation";
const Home = () => {
  const [movie, setMovie] = useState([]);

  // Recuperer la liste de film depuis la database
  useEffect(() => {
    fetch("http://localhost:8080/movies", { method: "GET" }).then((res) =>
      res.json().then((response) => {
        console.log(response);
        setMovie(response);
      })
    );
  }, []);

  return (
    <>
      <Nav></Nav>
      <main className="home">
        <div className="movie-container">
          {/* affichage de la liste de film  */}
          {movie.map((movieList) => (
            <MoviePoster key={movieList._id} {...movieList} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
