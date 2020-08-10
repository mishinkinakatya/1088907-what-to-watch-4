import React from "react";
import {Link} from "react-router-dom";
import {movieRequiredTypes, stringNotRequiredTypes, boolRequiredTypes, funcRequiredTypes, stringRequiredTypes} from "../../types/types";
import withFavoriteMovie from "../../hocs/with-favorite-movie/with-favorite-movie.jsx";
import {AppRoute, AuthorizationStatus, AppPages} from "../../utils/const";


const MovieButtons = (props) => {
  const {authorizationStatus, movie, isFavorite, onMyListButtonClick, activePage} = props;

  return (
    <div className="movie-card__buttons">
      <Link to={`${AppRoute.PLAYER_PAGE}/${movie.id}`} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list movie-card__button" type="button" onClick={onMyListButtonClick}>
        {isFavorite
          ? <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
          : <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        }
        <span>My list</span>
      </button>

      {authorizationStatus === AuthorizationStatus.AUTH && activePage === AppPages.MOVIE_PAGE &&
        <Link to={`${AppRoute.MOVIE_PAGE}/${movie.id}${AppRoute.ADD_REVIEW_PAGE}`} className="btn movie-card__button">Add review</Link>
      }
    </div>
  );
};


MovieButtons.propTypes = {
  movie: movieRequiredTypes,
  authorizationStatus: stringNotRequiredTypes,
  isFavorite: boolRequiredTypes,
  onMyListButtonClick: funcRequiredTypes,
  activePage: stringNotRequiredTypes,
  sendFavotiteStatus: stringRequiredTypes,
};


export {MovieButtons};
export default withFavoriteMovie(MovieButtons);
