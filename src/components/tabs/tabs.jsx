import React from "react";
import PropTypes from "prop-types";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";

const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const showedScreen = (menuItem, movie, reviews) => {
  switch (menuItem) {
    case TABS.DETAILS:
      return <MovieDetails movie={movie} />;
    case TABS.REVIEWS:
      return <MovieReviews reviews={reviews} />;
    default:
      return <MovieOverview movie={movie} />;
  }
};

const Tabs = (props) => {
  const {movie, reviews} = props;
  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link">{TABS.OVERVIEW}</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">{TABS.DETAILS}</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">{TABS.REVIEWS}</a>
          </li>
        </ul>
      </nav>
      {showedScreen(`Overview`, movie, reviews)}
    </div>
  );
};

Tabs.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    bgPoster: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starrings: PropTypes.string.isRequired,
  }).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    movieId: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    dateInMs: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  })
  )
};

export default Tabs;
