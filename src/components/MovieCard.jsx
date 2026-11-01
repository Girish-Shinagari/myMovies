import react from 'react';

function MovieCard({poster_path, title}) {
    return (
        <>

          <div id="movie_card" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`}}>
            
            <p id="movie_title">{title}</p>
          </div>

          

        </>
    )
}

export default MovieCard