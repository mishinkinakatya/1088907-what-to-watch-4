import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {movie, onTitleClick, onCardMouseOver} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onCardMouseOver}>
      <div className="small-movie-card__image">
        <img src={movie.image} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleClick}>{movie.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  onTitleClick: PropTypes.func.isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
};

export default SmallMovieCard;
