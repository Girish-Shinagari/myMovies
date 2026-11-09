import React, { useState } from "react";
import logo from './pictures/logo.png'
import '../App.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <div id="navbar">
                <NavLink to="/about">
                    <img src={logo} alt="img not loaded" />
                </NavLink>

                <button
                    id="menu-btn"
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div id="links" className={menuOpen ? "active" : ""}>
                    <NavLink to="/movies" onClick={() => setMenuOpen(false)}>Movies</NavLink>
                    <NavLink to="/watchlist" onClick={() => setMenuOpen(false)}>Watchlist</NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Navbar