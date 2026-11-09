import react, { useState } from 'react';
import heart from './pictures/heart.png';
import cross from './pictures/cross.png';
import '../App.css'
import Movies from './Movies';


function MovieCard({ poster_path, title, handleAddtoWatchList,handleRemoveFromWatchList, movie, watchlist }) {

  const [likedMovie, setLikedMovie] = useState(false);


  function doesContainMovie(movie) {
    for (let i = 0; i < watchlist.length; i++) {
      if (movie.id == watchlist[i].id) {
        return true
      }
    }
    return false
  }
  return (
    <>

      <div id="movie_card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }}>

        {doesContainMovie(movie) ?

        <div id="liked-movie" onClick={() => handleRemoveFromWatchList(movie)}>❌ </div>
        :

        <div id="liked-movie" onClick={() => handleAddtoWatchList(movie)}> ❤️ </div>
        }


        <p id="movie_title">{title}</p>
      </div>



    </>
  )
}

export default MovieCard