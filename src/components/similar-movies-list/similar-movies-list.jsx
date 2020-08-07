import React from "react";
import {connect} from "react-redux";
import {moviesTypes, onCardClickTypes, movieTypes} from "../../types/types.js";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import {getActiveMovie} from "../../store/reducer/cinema/selectors.js";
import {Operations as DataOperations} from "../../store/reducer/data/data.js";
import {getMovies, getPromoMovie} from "../../store/reducer/data/selectors.js";


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
  onCardClick: onCardClickTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: getMovies(state),
    activeMovie: getActiveMovie(state) || getPromoMovie(state),
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
