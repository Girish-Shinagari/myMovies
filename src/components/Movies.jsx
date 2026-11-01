import React from "react";
import Banner from "./Banner";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

import axios from "axios";

function Movies() {

  const [ movies, setMovies ] = useState([]);


  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a18f9444f6b4811c7983a0ef8d82d5ff&language=en-US&page=1")
      .then(function (res) {
        setMovies(res.data.results) 
        
      })
      .catch(
        function (err) {
          console.log(err)
        }
      )
  }, []);


  return (
    <>
      <Banner />
      <h3 style={{ textAlign: "center", fontWeight: "300", width: "100%", margin: "5px" }}>Trending Movies</h3>
      <hr></hr>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
        {movies.map((movie) => {
          return (
            <MovieCard poster_path={movie.poster_path} title={movie.title} />
          )
        })}

      </div>
    </>
  )
}
export default Movies