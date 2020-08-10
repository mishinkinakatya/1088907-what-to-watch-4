import React from "react";
import {connect} from "react-redux";
import {funcRequiredTypes, numberNotRequiredTypes, moviesRequiredTypes} from "../../types/types";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import {getMoviesListOfActiveGenre, getMaxCountOfVisibleMovies} from "../../store/reducer/cinema/selectors";


const ShowMoreButton = (props) => {
  const {movies, maxCountOfVisibleMovies, onShowMoreButtonClick} = props;

  return movies.length > maxCountOfVisibleMovies
    ? <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
    </div>
    : ``;
};


ShowMoreButton.propTypes = {
  movies: moviesRequiredTypes,
  maxCountOfVisibleMovies: numberNotRequiredTypes,
  onShowMoreButtonClick: funcRequiredTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: getMoviesListOfActiveGenre(state),
    maxCountOfVisibleMovies: getMaxCountOfVisibleMovies(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.changeMaxCountOfVisibleMovies());
  }
});


export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
