import React from "react";
import logo from './pictures/logo.png'

function Footer() {
    return (
        <>
            <footer className="footer">

                <div className="footer-container">

                    {/* Brand */}
                    <div className="footer-brand">
                        <img src={logo} alt="myMovies" />
                        <p>
                            Discover your next favorite movie.
                            Explore movies and series from
                            different genres.
                        </p>
                    </div>

                    {/* Explore */}
                    <div className="footer-section">
                        <h3>Explore</h3>
                        <a href="/">Home</a>
                        <a href="/">Movies</a>
                        <a href="/">TV Shows</a>
                        <a href="/">Collections</a>
                    </div>

                    {/* Support */}
                    <div className="footer-section">
                        <h3>Support</h3>
                        <a href="/">Contact Us</a>
                        <a href="/">Help Center</a>
                        <a href="/">FAQ</a>
                    </div>

                    {/* Legal */}
                    <div className="footer-section">
                        <h3>Legal</h3>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms & Conditions</a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>© 2026 myMovies. All rights reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer