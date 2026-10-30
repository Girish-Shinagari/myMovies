import React from "react";
import logo from './pictures/logo.png'
import '../App.css'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <div id="navbar">
                <Link to="/home">
                    <img src={logo} alt="img not loaded" />
                </Link>
                <div id="links">
                    <Link to="/movies">Movies</Link>
                    <Link to="/watchlist">Watchlist</Link>
                    <Link to="/home">Home</Link>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Navbar