import React from "react";
import logo from './pictures/logo.png'
import '../App.css'



function Navbar() {
    return (
        <>
           <div id="navbar">
            <img src={logo} alt="img not loaded" />
            <div id="links">
                 <a href="/">Home</a>
                 <a href="/">Wishlist</a>
            </div>
           
           </div>
        </>
    )
}

export default Navbar