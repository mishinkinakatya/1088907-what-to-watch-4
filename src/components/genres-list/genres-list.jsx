import React from "react";
import {allGenresTypes, activeGenreTypes, onGenreClickTypes} from "../../types/types.js";


const ACTIVE_GENRE_ITEM = `catalog__genres-item--active`;

const GenresList = (props) => {
  const {activeGenre, allGenres, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {allGenres.map((genre) => {
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
  activeGenre: activeGenreTypes,
  allGenres: allGenresTypes,
  onGenreClick: onGenreClickTypes,
};

export default GenresList;