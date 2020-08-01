import PropTypes from "prop-types";

export const promoMovieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runTimeInSec: PropTypes.number.isRequired,
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
});

export const movieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runTimeInSec: PropTypes.number.isRequired,
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

export const activeMovieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runTimeInSec: PropTypes.number.isRequired,
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
});

export const moviesTypes = PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      runTimeInSec: PropTypes.number.isRequired,
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
      runTimeInSec: PropTypes.number.isRequired,
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
      dateUTC: PropTypes.string.isRequired,
      ratingScore: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired
).isRequired;

export const allGenresTypes = PropTypes.arrayOf(
    PropTypes.string.isRequired
).isRequired;

export const posterTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}).isRequired;

export const tabsTypes = PropTypes.object.isRequired;

export const activeItemTypes = PropTypes.string;

export const previewTypes = PropTypes.string.isRequired;

export const activeGenreTypes = PropTypes.string.isRequired;

export const countMoviesOnMainPageTypes = PropTypes.number;

export const isPlayingTypes = PropTypes.bool.isRequired;

export const isVideoPlayerPageOpenTypes = PropTypes.bool.isRequired;

export const onCardClickTypes = PropTypes.func.isRequired;

export const onCardHoverTypes = PropTypes.func.isRequired;

export const onItemClickTypes = PropTypes.func.isRequired;

export const onGenreClickTypes = PropTypes.func.isRequired;

export const onShowMoreButtonClickTypes = PropTypes.func.isRequired;

export const onCardMouseEventTypes = PropTypes.func.isRequired;

export const onPlayButtonClickTypes = PropTypes.func.isRequired;

export const onExitButtonClickTypes = PropTypes.func.isRequired;

export const onFullScreenButtonClickTypes = PropTypes.func.isRequired;

export const onPlayPauseButtonClickTypes = PropTypes.func.isRequired;

export const renderVideoPlayerTypes = PropTypes.func.isRequired;

export const videoRefTypes = PropTypes.object.isRequired;

export const currentTimeValueTypes = PropTypes.number.isRequired;

export const runTimeTypes = PropTypes.number.isRequired;

export const playerTimeValueTypes = PropTypes.string.isRequired;

export const togglerValueInPercentsTypes = PropTypes.string.isRequired;
