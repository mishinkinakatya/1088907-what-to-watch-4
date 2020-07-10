export const movie = {
  id: 1,
  title: `Movie_title-1`,
  genre: `Genre`,
  year: 1111,
  runTimeInMin: 10000000,
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
    runTimeInMin: 10000000,
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
    runTimeInMin: 20000000,
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
    runTimeInMin: 30000000,
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
    dateInMs: 1586616380000,
    ratingScore: 1.0,
    comment: `Comment Author-1 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-2`,
    dateInMs: 2586616350000,
    ratingScore: 2.0,
    comment: `Comment Author-2 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-3`,
    dateInMs: 3586616340000,
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-4`,
    dateInMs: 4586616340000,
    ratingScore: 5.0,
    comment: `Comment Author-4 to Movie-11.`,
  },
  {
    movieId: 22,
    author: `Reviewer-1`,
    dateInMs: 5586616370000,
    ratingScore: 1.0,
    comment: `Comment Author-1 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-2`,
    dateInMs: 6586616370000,
    ratingScore: 2.0,
    comment: `Comment Author-2 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-3`,
    dateInMs: 7586616370000,
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-4`,
    dateInMs: 8586616370000,
    ratingScore: 4.0,
    comment: `Comment Author-4 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-5`,
    dateInMs: 9586616370000,
    ratingScore: 5.0,
    comment: `Comment Author-5 to Movie-22.`,
  },
  {
    movieId: 33,
    author: `Reviewer-3`,
    dateInMs: 1686616360000,
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-33.`,
  },
];

export const promoMovie = {
  id: 555,
  title: `Movie_title`,
  genre: `Genre`,
  year: 5555,
  runTimeInMin: 50000000,
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
    dateInMs: 4586616380000,
    ratingScore: 10.0,
    comment: `Comment Author-11 to Movie-555.`,
  },
  {
    movieId: 555,
    author: `Reviewer-22`,
    dateInMs: 5586616350000,
    ratingScore: 9.0,
    comment: `Comment Author-22 to Movie-555.`,
  },
  {
    movieId: 555,
    author: `Reviewer-33`,
    dateInMs: 6586616340000,
    ratingScore: 8.0,
    comment: `Comment Author-33 to Movie-555.`,
  },
];

export const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};
