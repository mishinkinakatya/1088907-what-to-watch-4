import React from "react";
import {onShowMoreButtonClickTypes, countMoviesOnMainPageTypes} from "../../types/types";


const ShowMoreButton = (props) => {
  const {countMoviesOfActiveGenre, countOfVisibleMoviesOnMainPage, onShowMoreButtonClick} = props;

  return countMoviesOfActiveGenre > countOfVisibleMoviesOnMainPage
    ? <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={(evt) => {
        evt.preventDefault();
        onShowMoreButtonClick(countMoviesOfActiveGenre, countOfVisibleMoviesOnMainPage);
      }}>Show more</button>
    </div>
    : ``;
};


ShowMoreButton.propTypes = {
  countMoviesOfActiveGenre: countMoviesOnMainPageTypes,
  countOfVisibleMoviesOnMainPage: countMoviesOnMainPageTypes,
  onShowMoreButtonClick: onShowMoreButtonClickTypes,
};


export default ShowMoreButton;
