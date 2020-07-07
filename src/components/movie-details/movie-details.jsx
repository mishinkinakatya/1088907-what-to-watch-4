import React from "react";
import PropTypes from "prop-types";


const MovieDetails = (props) => {
  const {movie} = props;
  const {director, starrings, runTimeInMs, genre, year} = movie;

  const transformStarrings = () => {
    return starrings.map((starring) => {
      return (
        {starring}, <br />
      );
    });
  };

  const castDateTimeFormat = (value) => {
    return value < 10 ? `0${value}` : String(value);
  };

  const getPointDurationInHM = () => {
    const MS_IN_HOUR = 3600000;
    const MS_IN_MINUTE = 60000;

    const hourCount = castDateTimeFormat(Math.trunc(runTimeInMs / MS_IN_HOUR));
    runTimeInMs -= hourCount * MS_IN_HOUR;
    const minutesCount = castDateTimeFormat(Math.trunc(runTimeInMs / MS_IN_MINUTE));

    return hourCount > 0 ? `${hourCount}H ${minutesCount}M` : `${minutesCount}M`;
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
          <span className="movie-card__details-value">{getPointDurationInHM()}</span>
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
  movie: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    runTimeInMs: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starrings: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
  }).isRequired,
};

export default MovieDetails;
