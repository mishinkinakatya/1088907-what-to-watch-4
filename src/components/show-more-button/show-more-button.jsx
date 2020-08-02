import React from "react";
import {onShowMoreButtonClickTypes, countMoviesOnMainPageTypes, moviesTypes, activeGenreTypes} from "../../types/types";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import {connect} from "react-redux";
import {getMoviesListOfActiveGenre, getMaxCountOfVisibleMovies} from "../../store/reducer/cinema/selectors";
import {getActiveGenre} from "../../store/reducer/cinema/selectors";


const ShowMoreButton = (props) => {
  const {movies, maxCountOfVisibleMovies, onShowMoreButtonClick} = props;

  const countMoviesOfActiveGenre = movies.length;

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
    movies: getMoviesListOfActiveGenre(state),
    activeGenre: getActiveGenre(state),
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
