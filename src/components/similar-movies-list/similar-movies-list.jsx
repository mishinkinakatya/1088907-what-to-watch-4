import React from "react";
import {connect} from "react-redux";
import {moviesRequiredTypes, movieRequiredTypes} from "../../types/types.js";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {getMovies} from "../../store/reducer/data/selectors.js";


const COUNT_VISIBLE_SIMILAR_MOVIES = 4;

const SimilarMoviesList = (props) => {
  const {movies, activeMovie} = props;
  const similarMovies = movies.filter((movie) => movie.genre === activeMovie.genre && movie.id !== activeMovie.id).slice(0, COUNT_VISIBLE_SIMILAR_MOVIES);

  return (
    <div className="catalog__movies-list">
      {similarMovies.map((it, i) => {
        return (
          <SmallMovieCard
            key={it.title + i}
            movie={it}
          />
        );
      })}
    </div>
  );
};


SimilarMoviesList.propTypes = {
  activeMovie: movieRequiredTypes,
  movies: moviesRequiredTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: getMovies(state),
  };
};


export {SimilarMoviesList};
export default connect(mapStateToProps, null)(SimilarMoviesList);
