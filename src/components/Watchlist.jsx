import react from 'react'

function Watchlist({watchlist, handleRemoveFromWatchList}) {
  return (
    <>


      <div id="watchList-sectoin-one">

        <div id="watchlist-buttons">
          <button>All types</button>
          <button>Action</button>
          <button>Crime</button>
        </div>

        <div id='search-bar'>
          <input type="text" placeholder='search movies' />
        </div>
      </div>

      <div id="watchList-sectoin-two" style={{ marginTop: '20px' ,overflow: 'auto' }}>
        <table style={{ width: '90vw', marginLeft: '5vw', tableLayout: 'fixed', border: '2px solid #3d3d3d', borderRadius: '10px' }}>
          <thead id='table-headings' style={{ textAlign: 'center' }}>
            <tr >
              <th style={{ width: '40vw' }}>Name</th>
              <th >Ratings</th>
              <th >Popularity</th>
              <th >type</th>
            </tr >
          </thead >

          <tbody>
            {watchlist.map((movie) => {
              return (
                <>
                  <tr style={{ border: '5px solid white' }}>
                    <td style={{ display: 'flex', alignItems: 'center' }}>
                      <img style={{ height: '15vh', paddingLeft: '5px' }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                      <div style={{ paddingLeft: '5px' }}>{movie.title}</div>
                    </td>
                    <td >{movie.vote_average}</td>
                    <td > {movie.popularity} </td>
                    <td >action</td>
                    <td ><span onClick={()=>{handleRemoveFromWatchList(movie)}} style={{ color: 'red', cursor: 'pointer' }}>remove</span></td>

                  </tr>
                </>
              )
            })}


          </tbody>
        </table>
      </div>
    </>
  )
}
export default Watchlist