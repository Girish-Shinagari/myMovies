
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/About'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist' 
import {useState,useEffect} from 'react'
import About from './components/About'

function App() {
  const  [ watchlist, setWatchlist] = useState([]);

  function handleAddtoWatchList(movie){
    let newWatchList = [...watchlist,movie];
    setWatchlist(newWatchList);
    localStorage.setItem('storage', JSON.stringify(newWatchList));
    
  }

   function handleRemoveFromWatchList(movie) {
    let filteredWatchList = watchlist.filter((mov) => {
      return movie.id != mov.id
    })
    localStorage.setItem('storage', JSON.stringify(filteredWatchList));
    setWatchlist(filteredWatchList)
  }

  useEffect(() => {
    let movieFromLocalStorage = localStorage.getItem("storage")
    if( !movieFromLocalStorage ){
      return
    }
    setWatchlist(JSON.parse(movieFromLocalStorage))
  },[])


  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Movies watchlist={watchlist} setWatchlist={setWatchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
          <Route path="/movies" element={<Movies watchlist={watchlist} setWatchlist={setWatchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
          <Route path="/about" element={<About />} />
        </Routes>

         
      </BrowserRouter>

     
    </>
  )
}

export default App
