import React from "react";
import Banner from "./Banner";
import MovieCard from "./MovieCard";

function Movies() {
  return (
    <>
      <Banner />
      <h3 style={{ textAlign: "center", fontWeight: "300", width: "100%", margin: "5px" }}>Trending Movies</h3>
        <hr></hr>    
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px",marginTop:"10px" }}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </>
  )
}
export default Movies