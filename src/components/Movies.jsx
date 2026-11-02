import React from "react";
import Banner from "./Banner";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import MoviePages from "./MoviePages";

import axios from "axios";
import Footer from "./Footer";

function Movies() {

  const [ movies, setMovies ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    setCurrentPage(currentPage+1);
  }

  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a18f9444f6b4811c7983a0ef8d82d5ff&language=en-US&page=${currentPage}`)
      .then(function (res) {
        setMovies(res.data.results) 
        
      })
      .catch(
        function (err) {
          console.log(err)
        }
      )
  }, [currentPage]);


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

      <div  >
        <MoviePages prevPage={prevPage} nextPage={nextPage} currentPage={currentPage}/>
      </div>

      <Footer/>
    </>
  )
}
export default Movies