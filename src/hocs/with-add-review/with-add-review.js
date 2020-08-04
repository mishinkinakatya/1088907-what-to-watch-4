import React, {PureComponent} from "react";
import {getAddReviewStatus} from "../../store/reducer/data/selectors";
import {connect} from "react-redux";
import {SendingStatus} from "../../utils/const";
import {addReviewStatusTypes, activeMovieTypes, onReviewPostTypes} from "../../types/types";
import {Operations as DataOperations} from "../../store/reducer/data/data.js";


const withAddReview = (Component) => {
  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.handleRatingScoreChange = this.handleRatingScoreChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.handleSubmitClick = this.handleSubmitClick.bind(this);

      this.state = {
        ratingScore: 3,
        comment: null,
        isSubmitButtonDisabled: true,
        isCommentSatisfactory: false,
      };
    }

    handleRatingScoreChange(evt) {
      const {addReviewStatus} = this.props;
      this.setState({
        ratingScore: evt.target.value,
        isSubmitButtonDisabled: !(evt.target.value !== null && this.state.isCommentSatisfactory && addReviewStatus !== SendingStatus.SENDING),
      });
    }

    handleCommentChange(evt) {
      const {addReviewStatus} = this.props;
      const {ratingScore} = this.state;
      this.setState({
        comment: evt.target.value,
        isCommentSatisfactory: evt.target.value.length >= 50 && evt.target.value.length <= 400,
        isSubmitButtonDisabled: !(ratingScore !== null && this.state.isCommentSatisfactory && addReviewStatus !== SendingStatus.SENDING),
      });
    }

    handleSubmitClick(evt) {
      const {activeMovie, onReviewPost} = this.props;
      const {ratingScore, comment} = this.state;
      evt.preventDefault();

      const reviewData = {
        ratingScore,
        comment,
      };

      onReviewPost(activeMovie.id, reviewData);
    }

    render() {
      const {ratingScore, isSubmitButtonDisabled} = this.state;

      return <Component
        {...this.props}
        ratingScore={Number(ratingScore)}
        isSubmitButtonDisabled={isSubmitButtonDisabled}
        onRatingScoreChange={this.handleRatingScoreChange}
        onCommentChange={this.handleCommentChange}
        onSubmitClick={this.handleSubmitClick}
      />;
    }
  }

  WithAddReview.propTypes = {
    activeMovie: activeMovieTypes,
    addReviewStatus: addReviewStatusTypes,
    onReviewPost: onReviewPostTypes,
  };

  const mapStateToProps = (state) => ({
    addReviewStatus: getAddReviewStatus(state),
  });

  const mapDispatchToProps = (dispatch) => ({
    onReviewPost(movieId, reviewData) {
      dispatch(DataOperations.postReview(movieId, reviewData));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithAddReview);
};

export default withAddReview;
