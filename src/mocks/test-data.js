export const movie = {
  id: 1,
  title: `Movie_title-1`,
  genre: `Genre`,
  year: 1111,
  runTimeInMin: 111,
  poster: {
    image: `Movie_image-1`,
    title: `Movie_title-1`,
  },
  bgPoster: {
    image: `Movie_image-1`,
    title: `Movie_title-1`,
  },
  rating: {
    score: 1.1,
    count: 111
  },
  description: `Description of Movie_title-1.`,
  director: `Director of Movie_title-1.`,
  starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
  preview: `Preview of Movie_title.`,
};

export const movies = [
  {
    id: 11,
    title: `Movie_title-1`,
    genre: `Genre-1`,
    year: 1111,
    runTimeInMin: 111,
    poster: {
      image: `Movie_image-1`,
      title: `Movie_title-1`,
    },
    bgPoster: {
      image: `Movie_image-1`,
      title: `Movie_title-1`,
    },
    rating: {
      score: 1.1,
      count: 111
    },
    description: `Description of Movie_title-1.`,
    director: `Director of Movie_title-1.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`],
    preview: `Preview of Movie_title-1.`,
  },
  {
    id: 22,
    title: `Movie_title-2`,
    genre: `Genre-2`,
    year: 2222,
    runTimeInMin: 222,
    poster: {
      image: `Movie_image-2`,
      title: `Movie_title-2`,
    },
    bgPoster: {
      image: `Movie_image-2`,
      title: `Movie_title-2`,
    },
    rating: {
      score: 2.2,
      count: 222
    },
    description: `Description of Movie_title-2.`,
    director: `Director of Movie_title-2.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`],
    preview: `Preview of Movie_title-2.`,
  },
  {
    id: 33,
    title: `Movie_title-3`,
    genre: `Genre-1`,
    year: 3333,
    runTimeInMin: 333,
    poster: {
      image: `Movie_image-3`,
      title: `Movie_title-3`,
    },
    bgPoster: {
      image: `Movie_image-3`,
      title: `Movie_title-3`,
    },
    rating: {
      score: 3.3,
      count: 333
    },
    description: `Description of Movie_title-3.`,
    director: `Director of Movie_title-3.`,
    starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`],
    preview: `Preview of Movie_title-3.`,
  }
];

export const reviews = [
  {
    movieId: 11,
    author: `Reviewer-1`,
    dateUTC: new Date(1586616380000),
    ratingScore: 1.0,
    comment: `Comment Author-1 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-2`,
    dateUTC: new Date(2586616350000),
    ratingScore: 2.0,
    comment: `Comment Author-2 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-3`,
    dateUTC: new Date(3586616340000),
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-4`,
    dateUTC: new Date(4586616340000),
    ratingScore: 5.0,
    comment: `Comment Author-4 to Movie-11.`,
  },
  {
    movieId: 22,
    author: `Reviewer-1`,
    dateUTC: new Date(5586616370000),
    ratingScore: 1.0,
    comment: `Comment Author-1 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-2`,
    dateUTC: new Date(6586616370000),
    ratingScore: 2.0,
    comment: `Comment Author-2 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-3`,
    dateUTC: new Date(7586616370000),
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-4`,
    dateUTC: new Date(8586616370000),
    ratingScore: 4.0,
    comment: `Comment Author-4 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-5`,
    dateUTC: new Date(9586616370000),
    ratingScore: 5.0,
    comment: `Comment Author-5 to Movie-22.`,
  },
  {
    movieId: 33,
    author: `Reviewer-3`,
    dateUTC: new Date(1686616360000),
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-33.`,
  },
];

export const promoMovie = {
  id: 555,
  title: `Movie_title`,
  genre: `Genre`,
  year: 5555,
  runTimeInMin: 55,
  poster: {
    image: `Movie_image`,
    title: `Movie_title`,
  },
  bgPoster: {
    image: `Movie_image`,
    title: `Movie_title`,
  },
  rating: {
    score: 5.5,
    count: 555
  },
  description: `Description of Movie_title.`,
  director: `Director of Movie_title.`,
  starrings: [`Starring-1`, `Starring-2`, `Starring-3`, `Starring-4`, `Starring-5`, `Starring-6`],
  preview: `Preview of Movie_title.`,
};

export const promoMovieReviews = [
  {
    movieId: 555,
    author: `Reviewer-11`,
    dateUTC: new Date(4586616380000),
    ratingScore: 10.0,
    comment: `Comment Author-11 to Movie-555.`,
  },
  {
    movieId: 555,
    author: `Reviewer-22`,
    dateUTC: new Date(5586616350000),
    ratingScore: 9.0,
    comment: `Comment Author-22 to Movie-555.`,
  },
  {
    movieId: 555,
    author: `Reviewer-33`,
    dateUTC: new Date(6586616340000),
    ratingScore: 8.0,
    comment: `Comment Author-33 to Movie-555.`,
  },
];

export const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};
