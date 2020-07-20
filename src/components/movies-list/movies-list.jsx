import React from "react";
import {moviesTypes, onCardClickTypes, countMoviesOnMainPageTypes, onItemClickTypes} from "../../types/types.js";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";


const MoviesList = (props) => {
  const {movies, maxCountOfVisibleMovies, onCardClick, onItemEvent} = props;

  const visibleMovies = movies.slice(0, maxCountOfVisibleMovies);

  return (
    <div className="catalog__movies-list">
      {visibleMovies.map((it, i) => {
        return (
          <SmallMovieCard
            key={it.title + i}
            movie={it}
            onCardClick={onCardClick}
            onCardHover={onItemEvent} />
        );
      })}
    </div>
  );
};


MoviesList.propTypes = {
  movies: moviesTypes,
  maxCountOfVisibleMovies: countMoviesOnMainPageTypes,
  onCardClick: onCardClickTypes,
  onItemEvent: onItemClickTypes,
};

export default withActiveItem(MoviesList);
