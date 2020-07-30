import React from "react";
import {movieTypes} from "../../types/types.js";
import {calculateDurationInHMS} from "../../utils/fn.js";


const getPointDurationInHM = (time) => {
  const duration = calculateDurationInHMS(time);

  if (duration.hours > 0) {
    if (duration.minutes !== `00`) {
      return `${duration.hours}h ${duration.minutes}m`;
    } else {
      return `${duration.hours}h`;
    }
  } else {
    return `${duration.minutes}m`;
  }
};

const MovieDetails = (props) => {
  const {movie} = props;
  const {director, starrings, runTimeInSec, genre, year} = movie;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starrings.join(`\n`)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getPointDurationInHM(runTimeInSec)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  );
};


MovieDetails.propTypes = {
  movie: movieTypes,
};

export default MovieDetails;
