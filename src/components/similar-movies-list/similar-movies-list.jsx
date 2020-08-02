import React from "react";
import {moviesTypes, onCardClickTypes, countMoviesOnMainPageTypes, activeGenreTypes, movieTypes} from "../../types/types.js";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import {connect} from "react-redux";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {getActiveMovie, getActiveGenre, getMaxCountOfVisibleMovies} from "../../store/reducer/cinema/selectors.js";
import {getMovies} from "../../store/reducer/data/selectors.js";
import {getPromoMovie} from "../../store/reducer/data/selectors.js";
import {Operations as DataOperations} from "../../store/reducer/data/data.js";


const COUNT_VISIBLE_SIMILAR_MOVIES = 4;

const SimilarMoviesList = (props) => {
  const {movies, activeMovie, onCardClick} = props;
  const similarMovies = movies.filter((movie) => movie.genre === activeMovie.genre && movie.id !== activeMovie.id).slice(0, COUNT_VISIBLE_SIMILAR_MOVIES);

  return (
    <div className="catalog__movies-list">
      {similarMovies.map((it, i) => {
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


SimilarMoviesList.propTypes = {
  activeMovie: movieTypes,
  movies: moviesTypes,
  activeGenre: activeGenreTypes,
  maxCountOfVisibleMovies: countMoviesOnMainPageTypes,
  onCardClick: onCardClickTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: getMovies(state),
    activeMovie: getActiveMovie(state) || getPromoMovie(state),
    activeGenre: getActiveGenre(state),
    maxCountOfVisibleMovies: getMaxCountOfVisibleMovies(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCardClick(activeMovie) {
    dispatch(ActionCreator.changeActiveMovie(activeMovie));
    dispatch(DataOperations.loadReviews(activeMovie.id));
  }
});


export {SimilarMoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(SimilarMoviesList);
