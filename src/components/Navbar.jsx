import React from "react";
import logo from './pictures/logo.png'
import '../App.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <div id="navbar">
                <NavLink to="/home"> 
                    <img src={logo} alt="img not loaded" />
                </NavLink>
                <div id="links">
                  <NavLink to="/movies">Movies</NavLink>
                    <NavLink to="/watchlist">Watchlist</NavLink>
                    <NavLink to="/home">Home</NavLink>
                </div> 
                <hr />
            </div>
        </>
    )
}

export default Navbar