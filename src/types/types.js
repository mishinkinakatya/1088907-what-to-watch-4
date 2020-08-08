import PropTypes from "prop-types";

export const movieRequiredTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runTimeInSec: PropTypes.number.isRequired,
  posterImage: PropTypes.string.isRequired,
  bgPosterImage: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starrings: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  preview: PropTypes.string.isRequired,
  movieLink: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
}).isRequired;

export const movieNotRequiredTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runTimeInSec: PropTypes.number.isRequired,
  posterImage: PropTypes.string.isRequired,
  bgPosterImage: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starrings: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ).isRequired,
  preview: PropTypes.string.isRequired,
  movieLink: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
});

export const moviesRequiredTypes = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      runTimeInSec: PropTypes.number.isRequired,
      posterImage: PropTypes.string.isRequired,
      bgPosterImage: PropTypes.string.isRequired,
      rating: PropTypes.shape({
        score: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starrings: PropTypes.arrayOf(
          PropTypes.string.isRequired
      ).isRequired,
      preview: PropTypes.string.isRequired,
      movieLink: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      previewImage: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
    }).isRequired
).isRequired;

export const reviewsRequiredTypes = PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      dateUTC: PropTypes.string.isRequired,
      ratingScore: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired
).isRequired;


export const authInfoNotRequiredTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
});

export const objectRequiredTypes = PropTypes.object.isRequired;


export const arrayOfStringRequiredTypes = PropTypes.arrayOf(
    PropTypes.string.isRequired
).isRequired;


export const stringNotRequiredTypes = PropTypes.string;

export const stringRequiredTypes = PropTypes.string.isRequired;

export const numberNotRequiredTypes = PropTypes.number;

export const numberRequiredTypes = PropTypes.number.isRequired;

export const boolRequiredTypes = PropTypes.bool.isRequired;

export const funcRequiredTypes = PropTypes.func.isRequired;
