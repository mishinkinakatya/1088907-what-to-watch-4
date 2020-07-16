import React from "react";
import {movieTypes} from "../../types/types.js";


const getPointDurationInHM = (time) => {
  const MIN_IN_HOUR = 60;

  const hourCount = Math.trunc(time / MIN_IN_HOUR);
  time -= hourCount * MIN_IN_HOUR;
  const minutesCount = time;

  if (hourCount > 0) {
    if (minutesCount !== 0) {
      return `${hourCount}h ${minutesCount}m`;
    } else {
      return `${hourCount}h`;
    }
  } else {
    return `${minutesCount}m`;
  }
};

const MovieDetails = (props) => {
  const {movie} = props;
  const {director, starrings, runTimeInMin, genre, year} = movie;

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
          <span className="movie-card__details-value">{getPointDurationInHM(runTimeInMin)}</span>
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
