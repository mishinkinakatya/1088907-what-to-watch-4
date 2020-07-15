import React from "react";
import {allGenresListTypes, activeGenreTypes, onGenreClickTypes} from "../../types/types.js";


const ACTIVE_GENRE_ITEM = `catalog__genres-item--active`;

const GenresList = (props) => {
  const {allGenresList, activeGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {allGenresList.map((genre) => {
        return (
          <li key={genre} className={`catalog__genres-item ${genre === activeGenre ? ACTIVE_GENRE_ITEM : ``}`}>
            <a href="#" className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(genre);
            }}>{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};


GenresList.propTypes = {
  allGenresList: allGenresListTypes,
  activeGenre: activeGenreTypes,
  onGenreClick: onGenreClickTypes,
};

export default GenresList;
