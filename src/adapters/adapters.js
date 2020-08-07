export const createMovie = (data) => {
  return {
    id: data.id,
    title: data.name,
    genre: data.genre,
    year: data.released,
    runTimeInSec: data.run_time * 60,
    posterImage: data.poster_image,
    bgPosterImage: data.background_image,
    rating: {
      score: data.rating,
      count: data.scores_count
    },
    description: data.description,
    director: data.director,
    starrings: data.starring,
    preview: data.preview_video_link,
    isFavorite: data.is_favorite,
  };
};

export const createReview = (data) => {
  return {
    movieId: data.id,
    author: data.user.name,
    dateUTC: data.date,
    ratingScore: data.rating,
    comment: data.comment,
  };
};
