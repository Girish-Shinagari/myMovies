import react, { useState,useEffect } from 'react'

import genreids from '../Utility/genre'

function Watchlist({watchlist, handleRemoveFromWatchList}) {

  const [search,setSearch] = useState("")
  const [genreList,setGenreList] = useState(["All types"])
  const [currentGenre,setCurrentGenre] = useState("All types")

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleButtonClick(genre) {
    setCurrentGenre(genre)
  }

  useEffect(()=>{
     let temp = watchlist.map((movie)=>{
      return genreids[movie.genre_ids[0]]
     })
     temp = new Set(temp)
     setGenreList(['All Genre',...temp])
  },[watchlist])


  return (
    <>


      <div id="watchList-section-one">
         
        <div id="watchlist-buttons">
          {genreList.map((genre)=>{
            return (
              <button onClick={()=>{handleButtonClick(genre)}} id={currentGenre == genre ? "clicked-button" : "unclicked-button"}>{genre}</button>
            )
          })}
        </div>

        <div id='search-bar'>
          <input type="text" onChange={handleSearch} value={search} placeholder='search movies' />
        </div>
      </div>

      <div id="watchList-section-two" style={{ marginTop: '20px' ,overflow: 'auto' }}>
        <table style={{ width: '90vw', marginLeft: '5vw', tableLayout: 'fixed', border: '2px solid #3d3d3d', borderRadius: '10px' }}>
          <thead id='table-headings' style={{ textAlign: 'center' }}>
            <tr >
              <th style={{ width: '40vw' }}>Name</th>
              <th >Ratings</th>
              <th >Popularity</th>
              <th >Genre</th>
            </tr >
          </thead >

          <tbody>
            {watchlist.filter((movie)=>{
              if(currentGenre == "All Genre"){
                return true
              }else{
                return genreids[movie.genre_ids[0]] == currentGenre
              }
            }).filter((movie)=>{
                return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
              
            }).map((movie) => {
              return (
                <>
                  <tr style={{ border: '5px solid white' }}>
                    <td style={{ display: 'flex', alignItems: 'center' }}>
                      <img style={{ height: '15vh', paddingLeft: '5px' }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                      <div style={{ paddingLeft: '5px' }}>{movie.title}</div>
                    </td>
                    <td >{movie.vote_average}</td>
                    <td > {movie.popularity} </td>
                    <td >{genreids[movie.genre_ids[0]]}</td>
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