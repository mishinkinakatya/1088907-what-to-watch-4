import React from "react";
import {moviesTypes, onCardClickTypes, countMoviesOnMainPageTypes, activeGenreTypes, movieTypes} from "../../types/types.js";
import {ActionCreator} from "../../store/actions.js";
import {connect} from "react-redux";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";


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
    movies: state.movies,
    activeMovie: state.activeMovie || state.promoMovie,
    activeGenre: state.activeGenre,
    maxCountOfVisibleMovies: state.maxCountOfVisibleMovies,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCardClick(activeMovie) {
    dispatch(ActionCreator.actionChangeActiveMovie(activeMovie));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(SimilarMoviesList);
