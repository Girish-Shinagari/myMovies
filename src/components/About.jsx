import '../App.css'

function About() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <p className="about-eyebrow">Discover. Explore. Enjoy.</p>
        <h1 id="about-title">
          About <span>myMovies</span>
        </h1>
        <p className="about-intro">
          Welcome to myMovies, your destination for discovering movies and
          exploring the world of entertainment.
        </p>
        <p className="about-description">
          Our platform helps movie lovers discover trending movies, explore
          different genres, check ratings, and create their personal watchlists.
        </p>
      </section>

      <section className="about-offers" aria-labelledby="offers-title">
        <h2 id="offers-title">What We Offer</h2>
        <div className="about-feature-grid">
          <article className="about-feature">
            <h3>Discover Movies</h3>
            <p>Explore trending and popular movies.</p>
          </article>
          <article className="about-feature">
            <h3>Explore Genres</h3>
            <p>Find movies based on your favorite genres.</p>
          </article>
          <article className="about-feature">
            <h3>Personal Watchlist</h3>
            <p>Save movies you want to watch later.</p>
          </article>
          <article className="about-feature">
            <h3>Movie Details</h3>
            <p>Discover movie descriptions, ratings, and release dates.</p>
          </article>
        </div>
      </section>

      <section className="about-mission" aria-labelledby="mission-title">
        <h2 id="mission-title">Our Mission</h2>
        <p>
          Our mission is to make movie discovery simple, enjoyable, and
          accessible for everyone.
        </p>
      </section>

      <section className="about-built" aria-labelledby="built-title">
        <h2 id="built-title">Built With</h2>
        <p>React.js <span aria-hidden="true">|</span> JavaScript <span aria-hidden="true">|</span> CSS <span aria-hidden="true">|</span> TMDB API</p>
      </section>

      <p className="about-signoff">Made with <span aria-label="love">♥</span> for movie lovers.</p>
    </main>
  )
}

export default About
