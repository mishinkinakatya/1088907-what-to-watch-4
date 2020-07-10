import React from "react";
import {reviewsTypes} from "../../types/types.js";


const MONTHS_NAME = {
  "01": `January`,
  "02": `February`,
  "03": `March`,
  "04": `April`,
  "05": `May`,
  "06": `June`,
  "07": `July`,
  "08": `August`,
  "09": `September`,
  "10": `October`,
  "11": `November`,
  "12": `December`,
};

const castDateTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const createReviewTemplate = (review) => {
  const {comment, author, dateUTC, ratingScore} = review;

  const date = castDateTimeFormat(dateUTC.getDate());
  const month = castDateTimeFormat(dateUTC.getMonth() + 1);
  const year = castDateTimeFormat(dateUTC.getFullYear());

  const dateYYYYMMDD = `${year}-${month}-${date}`;

  const visibleDate = `${MONTHS_NAME[month]} ${date}, ${year}`;

  return (
    <div className="review" key={dateUTC}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={dateYYYYMMDD}>{visibleDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{ratingScore.toString()}</div>
    </div>
  );
};

const MovieReviews = (props) => {
  const {reviews} = props;

  const firstPartReviewsLength = reviews.length % 2 === 0
    ? reviews.length / 2
    : reviews.length / 2 + 1;

  const firstPartReviews = reviews.slice(0, firstPartReviewsLength);
  const secondPartReviews = reviews.slice(firstPartReviewsLength);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstPartReviews.map((review) => createReviewTemplate(review))}
      </div>
      <div className="movie-card__reviews-col">
        {secondPartReviews.map((review) => createReviewTemplate(review))}
      </div>
    </div>
  );
};


MovieReviews.propTypes = {
  reviews: reviewsTypes,
};

export default MovieReviews;
