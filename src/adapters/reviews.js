export const createReview = (data) => {
  return {
    movieId: data.id,
    author: data.user.name,
    dateUTC: data.date,
    ratingScore: data.rating,
    comment: data.comment,
  };
};


export const reviews = [
  {
    movieId: 1,
    author: `Reviewer-1`,
    dateUTC: new Date(1586616380000),
    ratingScore: 1.0,
    comment: `Comment Author-1 to Movie-1.`,
  },
  {
    movieId: 2,
    author: `Reviewer-2`,
    dateUTC: new Date(2586616370000),
    ratingScore: 2.0,
    comment: `Comment Author-2 to Movie-2.`,
  },
  {
    movieId: 3,
    author: `Reviewer-3`,
    dateUTC: new Date(3586616360000),
    ratingScore: 3.0,
    comment: `Comment Author-3 to Movie-3.`,
  },
  {
    movieId: 4,
    author: `Reviewer-4`,
    dateUTC: new Date(4586616350000),
    ratingScore: 4.0,
    comment: `Comment Author-4 to Movie-4.`,
  },
  {
    movieId: 5,
    author: `Reviewer-5`,
    dateUTC: new Date(5586616340000),
    ratingScore: 5.0,
    comment: `Comment Author-5 to Movie-5.`,
  },
  {
    movieId: 6,
    author: `Reviewer-6`,
    dateUTC: new Date(6586616330000),
    ratingScore: 6.0,
    comment: `Comment Author-6 to Movie-6.`,
  },
  {
    movieId: 7,
    author: `Reviewer-7`,
    dateUTC: new Date(7586616320000),
    ratingScore: 7.0,
    comment: `Comment Author-7 to Movie-7.`,
  },
  {
    movieId: 8,
    author: `Reviewer-8`,
    dateUTC: new Date(886616310000),
    ratingScore: 8.0,
    comment: `Comment Author-8 to Movie-8.`,
  },
];
