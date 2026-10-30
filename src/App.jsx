
import './App.css'
import Navbar from './components/navbar'
import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'

function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Navbar/>

        <Routes>
          
          <Route path="/movies" element={<Movies />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
