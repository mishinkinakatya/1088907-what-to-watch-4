import React from "react";
import {onShowMoreButtonClickTypes, countMoviesOnMainPageTypes, moviesTypes, activeGenreTypes} from "../../types/types";
import {ActionCreator} from "../../store/actions.js";
import {connect} from "react-redux";
import {getMoviesListOfActiveGenre} from "../../utils/fn";


const ShowMoreButton = (props) => {
  const {movies, activeGenre, maxCountOfVisibleMovies, onShowMoreButtonClick} = props;

  const countMoviesOfActiveGenre = getMoviesListOfActiveGenre(movies, activeGenre).length;

  return countMoviesOfActiveGenre > maxCountOfVisibleMovies
    ? <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
    </div>
    : ``;
};


ShowMoreButton.propTypes = {
  movies: moviesTypes,
  activeGenre: activeGenreTypes,
  maxCountOfVisibleMovies: countMoviesOnMainPageTypes,
  onShowMoreButtonClick: onShowMoreButtonClickTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    activeGenre: state.activeGenre,
    maxCountOfVisibleMovies: state.maxCountOfVisibleMovies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.actionChangeMaxCountOfVisibleMovies());
  }
});


export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
