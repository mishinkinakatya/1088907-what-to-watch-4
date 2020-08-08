import React from "react";
import {movieRequiredTypes} from "../../types/types.js";


const COUNT_VISIBLE_STARRINGS = 4;

const calculateRatingLevel = (score) => {
  if (score >= 0 && score < 3) {
    return `Bad`;
  }
  if (score >= 3 && score < 5) {
    return `Normal`;
  }
  if (score >= 5 && score < 8) {
    return `Good`;
  }
  if (score >= 8 && score < 10) {
    return `Very good`;
  }
  if (score === 10) {
    return `Awesome`;
  }
  return null;
};

const MovieOverview = (props) => {
  const {rating, description, director, starrings} = props.movie;

  const starringsList = starrings.length <= COUNT_VISIBLE_STARRINGS
    ? starrings.join(`, `)
    : `${starrings.slice(0, COUNT_VISIBLE_STARRINGS).join(`, `)} and other`;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating.score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{calculateRatingLevel(rating.score)}</span>
          <span className="movie-rating__count">{rating.count} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starringsList}</strong></p>
      </div>
    </React.Fragment>
  );
};


MovieOverview.propTypes = {
  movie: movieRequiredTypes,
};

export default MovieOverview;
