import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {title, onTitleClick} = props;

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleClick}>{title}</a>
        </h3>
      </article>
    </React.Fragment>
  );
};

SmallMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default SmallMovieCard;
