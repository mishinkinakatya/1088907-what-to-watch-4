import React from "react";
import {movieTypes} from "../../types/types.js";


const castDateTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const getPointDurationInHM = (time) => {
  const MS_IN_HOUR = 3600000;
  const MS_IN_MINUTE = 60000;

  const hourCount = castDateTimeFormat(Math.trunc(time / MS_IN_HOUR));
  time -= hourCount * MS_IN_HOUR;
  const minutesCount = castDateTimeFormat(Math.trunc(time / MS_IN_MINUTE));

  return hourCount > 0 ? `${hourCount}H ${minutesCount}M` : `${minutesCount}M`;
};

const MovieDetails = (props) => {
  const {movie} = props;
  const {director, starrings, runTimeInMs, genre, year} = movie;

  const transformStarrings = () => {
    // return starrings.map((starring) => starring.join(`\n`));
    return starrings;
  };


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
            {transformStarrings()}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getPointDurationInHM(runTimeInMs)}</span>
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
