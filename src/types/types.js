import PropTypes from "prop-types";

export const promoMovieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runTimeInMin: PropTypes.number.isRequired,
  poster: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  bgPoster: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
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
}).isRequired;

export const movieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runTimeInMin: PropTypes.number.isRequired,
  poster: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  bgPoster: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
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
}).isRequired;

export const moviesTypes = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      runTimeInMin: PropTypes.number.isRequired,
      poster: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
      bgPoster: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
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
    }).isRequired
).isRequired;

export const similarMoviesTypes = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      runTimeInMin: PropTypes.number.isRequired,
      poster: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
      bgPoster: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      }).isRequired,
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
    }).isRequired
).isRequired;

export const promoMovieReviewsTypes = PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      dateUTC: PropTypes.object.isRequired,
      ratingScore: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired
).isRequired;

export const reviewsTypes = PropTypes.arrayOf(
    PropTypes.shape({
      movieId: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      dateUTC: PropTypes.object.isRequired,
      ratingScore: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired
).isRequired;

export const allGenresListTypes = PropTypes.arrayOf(
    PropTypes.string.isRequired
).isRequired;

export const posterTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}).isRequired;

export const tabsTypes = PropTypes.object.isRequired;

export const activeTabTypes = PropTypes.string.isRequired;

export const previewTypes = PropTypes.string.isRequired;

export const activeGenreTypes = PropTypes.string.isRequired;

export const isPlayingTypes = PropTypes.bool.isRequired;

export const onCardClickTypes = PropTypes.func.isRequired;

export const onCardHoverTypes = PropTypes.func.isRequired;

export const onTabClickTypes = PropTypes.func.isRequired;

export const onGenreClickTypes = PropTypes.func.isRequired;
