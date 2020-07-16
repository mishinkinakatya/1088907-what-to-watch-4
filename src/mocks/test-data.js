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
    dateUTC: new Date(`2011-01-01T14:13:56.123Z`),
    ratingScore: 1.0,
    comment: `Comment Author-1 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-2`,
    dateUTC: new Date(`2012-02-02T16:16:56.123Z`),
    ratingScore: 2.0,
    comment: `Comment Author-2 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-3`,
    dateUTC: new Date(`2013-03-03T03:03:56.123Z`),
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-11.`,
  },
  {
    movieId: 11,
    author: `Reviewer-4`,
    dateUTC: new Date(`2014-04-04T11:11:56.123Z`),
    ratingScore: 5.0,
    comment: `Comment Author-4 to Movie-11.`,
  },
  {
    movieId: 22,
    author: `Reviewer-1`,
    dateUTC: new Date(`2015-05-05T17:17:56.123Z`),
    ratingScore: 1.0,
    comment: `Comment Author-1 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-2`,
    dateUTC: new Date(`2016-06-06T11:11:56.123Z`),
    ratingScore: 2.0,
    comment: `Comment Author-2 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-3`,
    dateUTC: new Date(`2017-07-07T06:06:56.123Z`),
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-4`,
    dateUTC: new Date(`2018-08-08T15:15:56.123Z`),
    ratingScore: 4.0,
    comment: `Comment Author-4 to Movie-22.`,
  },
  {
    movieId: 22,
    author: `Reviewer-5`,
    dateUTC: new Date(`2019-09-09T14:14:56.123Z`),
    ratingScore: 5.0,
    comment: `Comment Author-5 to Movie-22.`,
  },
  {
    movieId: 33,
    author: `Reviewer-3`,
    dateUTC: new Date(`2020-10-10T02:02:56.123Z`),
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
    dateUTC: new Date(`2021-11-11T20:20:56.123Z`),
    ratingScore: 10.0,
    comment: `Comment Author-11 to Movie-555.`,
  },
  {
    movieId: 555,
    author: `Reviewer-22`,
    dateUTC: new Date(`2022-12-12T10:10:56.123Z`),
    ratingScore: 9.0,
    comment: `Comment Author-22 to Movie-555.`,
  },
  {
    movieId: 555,
    author: `Reviewer-33`,
    dateUTC: new Date(`2023-07-31T01:01:56.123Z`),
    ratingScore: 8.0,
    comment: `Comment Author-33 to Movie-555.`,
  },
];

export const TabsName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};
