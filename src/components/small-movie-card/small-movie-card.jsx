import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {movie, onCardClick, onCardMouseOver} = props;

  const handleCardClick = (evt) => {
    evt.preventDefault();
    onCardClick(movie);
  };

  return (
    <article className="small-movie-card catalog__movies-card" onClick={handleCardClick} onMouseOver={onCardMouseOver}>
      <div className="small-movie-card__image">
        <img src={movie.bgPoster.image} alt={movie.bgPoster.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movie.bgPoster.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
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
      level: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default SmallMovieCard;
