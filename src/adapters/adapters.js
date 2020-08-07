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
    movieLink: data.video_link,
    isFavorite: data.is_favorite,
    previewImage: data.preview_image,
    bgColor: data.background_color,
  };
};

export const createReview = (data) => {
  return {
    movieId: data.id,
    author: data.user.name,
    authorId: data.user.id,
    dateUTC: data.date,
    ratingScore: data.rating,
    comment: data.comment,
  };
};

export const createAuthInfo = (data) => {
  return {
    id: data.id,
    email: data.email,
    name: data.name,
    avatarUrl: `https://4.react.pages.academy${data.avatar_url}`,
  };
};
