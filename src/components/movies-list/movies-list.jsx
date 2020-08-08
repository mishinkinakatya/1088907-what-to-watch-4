import React from "react";
import {connect} from "react-redux";
import {moviesRequiredTypes, numberNotRequiredTypes, funcRequiredTypes, stringNotRequiredTypes} from "../../types/types.js";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import {getMoviesListOfActiveGenre, getMaxCountOfVisibleMovies} from "../../store/reducer/cinema/selectors.js";
import {Operations as DataOperations} from "../../store/reducer/data/data.js";
import {getFavoriteMovies} from "../../store/reducer/data/selectors.js";
import {AppPages} from "../../utils/const.js";

const MoviesList = (props) => {
  const {movies, favoriteMovies, activePage, maxCountOfVisibleMovies, onCardClick} = props;

  const visibleMovies = activePage === AppPages.MY_LIST_PAGE ? favoriteMovies : movies.slice(0, maxCountOfVisibleMovies);

  return (
    <div className="catalog__movies-list">
      {visibleMovies.map((it, i) => {
        return (
          <SmallMovieCard
            key={it.title + i}
            movie={it}
            onCardClick={onCardClick}
          />
        );
      })}
    </div>
  );
};


MoviesList.propTypes = {
  movies: moviesRequiredTypes,
  favoriteMovies: moviesRequiredTypes,
  maxCountOfVisibleMovies: numberNotRequiredTypes,
  onCardClick: funcRequiredTypes,
  activePage: stringNotRequiredTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: getMoviesListOfActiveGenre(state),
    maxCountOfVisibleMovies: getMaxCountOfVisibleMovies(state),
    favoriteMovies: getFavoriteMovies(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCardClick(activeMovie) {
    dispatch(ActionCreator.changeActiveMovie(activeMovie));
    dispatch(DataOperations.loadReviews(activeMovie.id));
  }
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
