import {DEFAULT_GENRE, MINUTES_ON_HOUR, SECONDS_ON_MINUTE, INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE} from "../utils/const.js";
import {movies} from "../adapters/movies.js";


const castDateTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
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

export const getMoviesListOfActiveGenre = (allMovies, activeGenre) => {
  return activeGenre === DEFAULT_GENRE ? allMovies : allMovies.filter((movie) => movie.genre === activeGenre);
};

export const getMaxCountOfVisibleMovies = () => {
  return movies.length > INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE ? INITIAL_COUNT_VISIBLE_MOVIES_ON_MAIN_PAGE : movies.length;
};
