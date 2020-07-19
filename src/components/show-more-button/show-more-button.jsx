import React from "react";
import {onShowMoreButtonClickTypes, countMoviesOnMainPageTypes} from "../../types/types";


const ShowMoreButton = (props) => {
  const {countMoviesOfActiveGenre, maxCountOfVisibleMovies, onShowMoreButtonClick} = props;

  return countMoviesOfActiveGenre > maxCountOfVisibleMovies
    ? <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
    </div>
    : ``;
};


ShowMoreButton.propTypes = {
  countMoviesOfActiveGenre: countMoviesOnMainPageTypes,
  maxCountOfVisibleMovies: countMoviesOnMainPageTypes,
  onShowMoreButtonClick: onShowMoreButtonClickTypes,
};


export default ShowMoreButton;
