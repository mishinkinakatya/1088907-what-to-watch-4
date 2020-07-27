import {DEFAULT_GENRE, MINUTES_ON_HOUR, SECONDS_ON_MINUTE} from "../utils/const.js";

const COUNT_OF_VISIBLE_GENRES = 10;

const castDateTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

export const getMoviesListOfActiveGenre = (movies, activeGenre) => {
  return activeGenre === DEFAULT_GENRE ? movies : movies.filter((movie) => movie.genre === activeGenre);
};

export const getAllGenresList = (allMovies) => {
  const allGenres = [DEFAULT_GENRE].concat(Array.from(new Set(allMovies.map((movie) => movie.genre))));
  return allGenres.length > COUNT_OF_VISIBLE_GENRES ? allGenres.slice(0, COUNT_OF_VISIBLE_GENRES) : allGenres;
};

export const calculateDurationInHMS = (duration) => {


  const hoursCount = Math.trunc(duration / MINUTES_ON_HOUR / SECONDS_ON_MINUTE);
  duration -= hoursCount * MINUTES_ON_HOUR * SECONDS_ON_MINUTE;
  const minutesCount = Math.trunc(duration / SECONDS_ON_MINUTE);
  duration -= minutesCount * SECONDS_ON_MINUTE;
  const secondsCount = duration;

  return {
    hours: hoursCount,
    minutes: castDateTimeFormat(minutesCount),
    seconds: castDateTimeFormat(secondsCount),
  };
};
