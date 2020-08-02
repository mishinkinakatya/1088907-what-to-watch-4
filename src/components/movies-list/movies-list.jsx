import React from "react";
import {moviesTypes, countMoviesOnMainPageTypes, onCardClickTypes} from "../../types/types.js";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import {connect} from "react-redux";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {getMoviesListOfActiveGenre, getMaxCountOfVisibleMovies} from "../../store/reducer/cinema/selectors.js";
import {Operations as DataOperations} from "../../store/reducer/data/data.js";


const MoviesList = (props) => {
  const {movies, maxCountOfVisibleMovies, onCardClick} = props;
  const visibleMovies = movies.slice(0, maxCountOfVisibleMovies);

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
  movies: moviesTypes,
  maxCountOfVisibleMovies: countMoviesOnMainPageTypes,
  onCardClick: onCardClickTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: getMoviesListOfActiveGenre(state),
    maxCountOfVisibleMovies: getMaxCountOfVisibleMovies(state),
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
