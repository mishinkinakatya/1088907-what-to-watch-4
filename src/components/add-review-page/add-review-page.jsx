import React from "react";
import {movieTypes, addReviewStatusTypes, onRatingScoreChangeTypes, isSubmitButtonDisabledTypes, onCommentChangeTypes, onSubmitClickTypes, ratingScoreTypes, authorizationStatusTypes} from "../../types/types";
import withAddReview from "../../hocs/with-add-review/with-add-review";
import {Review, SendingStatus, AppPages} from "../../utils/const";
import PageHeader from "../page-header/page-header.jsx";


const createRatingStarTemplate = (score, ratingScore) => {
  const isChecked = score === ratingScore;

  return (
    <React.Fragment key={score}>
      <input className="rating__input" id={`star-${score}`} type="radio" name="rating" value={score} checked={isChecked} readOnly />
      <label className="rating__label" htmlFor={`star-${score}`}>Rating {score}</label>
    </React.Fragment>
  );
};

const AddReviewPage = (props) => {
  const {activeMovie, isSubmitButtonDisabled, onRatingScoreChange, onCommentChange, onSubmitClick, addReviewStatus, ratingScore, authorizationStatus} = props;
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={activeMovie.bgPosterImage} alt={activeMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader authorizationStatus={authorizationStatus} activePage={AppPages.ADD_REVIEW_PAGE} activeMovie={activeMovie} />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={activeMovie.posterImage} alt={activeMovie.title} width="218" height="327" />
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
  authorizationStatus: authorizationStatusTypes,
};


export default withAddReview(AddReviewPage);
