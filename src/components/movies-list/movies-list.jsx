import React from "react";
import {moviesTypes, onCardClickTypes, countMoviesOnMainPageTypes, activeGenreTypes} from "../../types/types.js";
import {ActionCreator} from "../../store/actions.js";
import {connect} from "react-redux";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {getMoviesListOfActiveGenre} from "../../utils/fn.js";


const MoviesList = (props) => {
  const {movies, activeGenre, maxCountOfVisibleMovies, onCardClick} = props;
  const visibleMovies = getMoviesListOfActiveGenre(movies, activeGenre).slice(0, maxCountOfVisibleMovies);

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
  activeGenre: activeGenreTypes,
  maxCountOfVisibleMovies: countMoviesOnMainPageTypes,
  onCardClick: onCardClickTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    activeGenre: state.activeGenre,
    maxCountOfVisibleMovies: state.maxCountOfVisibleMovies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCardClick(activeMovie) {
    dispatch(ActionCreator.actionChangeActiveMovie(activeMovie));
  }
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
