export const createMovie = (data) => {
  return {
    id: data.id,
    title: data.name,
    genre: data.genre,
    year: data.released,
    runTimeInSec: data.run_time * 60,
    poster: {
      image: data.poster_image,
      title: ``,
    },
    bgPoster: {
      image: data.background_image,
      title: ``,
    },
    rating: {
      score: data.rating,
      count: data.scores_count
    },
    description: data.description,
    director: data.director,
    starrings: data.starring,
    preview: data.preview_video_link,
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
