import React from "react";
import {movieTypes, addReviewStatusTypes, onRatingScoreChangeTypes, isSubmitButtonDisabledTypes, onCommentChangeTypes, onSubmitClickTypes, ratingScoreTypes} from "../../types/types";
import withAddReview from "../../hocs/with-add-review/with-add-review";
import {Review, SendingStatus} from "../../utils/const";


const createRatingStarTemplate = (score, ratingScore) => {
  const isChecked = score === ratingScore;

  return (
    <React.Fragment key={score}>
      <input className="rating__input" id={`star-${score}`} type="radio" name="rating" value={score} checked={isChecked} readOnly/>
      <label className="rating__label" htmlFor={`star-${score}`}>Rating {score}</label>
    </React.Fragment>
  );
};

const AddReviewPage = (props) => {
  const {activeMovie, isSubmitButtonDisabled, onRatingScoreChange, onCommentChange, onSubmitClick, addReviewStatus, ratingScore} = props;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={activeMovie.bgPoster.image} alt={activeMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{activeMovie.title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={activeMovie.poster.image} alt={activeMovie.title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars" onChange={onRatingScoreChange} disabled={addReviewStatus === SendingStatus.SENDING}>
              {Array.from(Array(Review.MAX_COUNT_OF_RATING_STARS)).map((_, index) => createRatingStarTemplate(index + 1, ratingScore))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" required minLength={Review.MIN_LENGTH} maxLength={Review.MAX_LENGTH} onChange={onCommentChange} disabled={addReviewStatus === SendingStatus.SENDING}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" onClick={onSubmitClick} disabled={isSubmitButtonDisabled}>Post</button>
            </div>

          </div>
          {addReviewStatus === SendingStatus.FAIL
            ? <div>
              <p>Sorry, review not sent. Try later</p>
            </div>
            : ``
          }
        </form>
      </div>

    </section>
  );
};


AddReviewPage.propTypes = {
  activeMovie: movieTypes,
  addReviewStatus: addReviewStatusTypes,
  isSubmitButtonDisabled: isSubmitButtonDisabledTypes,
  onRatingScoreChange: onRatingScoreChangeTypes,
  onCommentChange: onCommentChangeTypes,
  onSubmitClick: onSubmitClickTypes,
  ratingScore: ratingScoreTypes,
};


export default withAddReview(AddReviewPage);
