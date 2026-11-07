
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist' 
import {useState} from 'react'

function App() {
  const  [ watchlist, setWatchlist] = useState([]);


  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Movies watchlist={watchlist} setWatchlist={setWatchlist}/>} />
          <Route path="/movies" element={<Movies watchlist={watchlist} setWatchlist={setWatchlist}/>} />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist}/>} />
          <Route path="/home" element={<Home />} />
        </Routes>

         
      </BrowserRouter>

     
    </>
  )
}

export default App
