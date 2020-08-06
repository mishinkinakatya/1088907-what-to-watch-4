import React from "react";
import {promoMovieTypes, authorizationStatusTypes} from "../../types/types.js";
import MoviesList from "../movies-list/movies-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import {Link} from "react-router-dom";
import {AppRoute, AppPages} from "../../utils/const.js";

const MainPage = (props) => {
  const {promoMovie, authorizationStatus} = props;
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.bgPoster.image} alt={promoMovie.bgPoster.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader authorizationStatus={authorizationStatus} activePage={AppPages.MAIN_PAGE} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.poster.image} alt={promoMovie.poster.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`${AppRoute.PLAYER_PAGE}/${promoMovie.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  {promoMovie.isFavorite
                    ? <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                    : <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  }
                  <span>My list</span>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <MoviesList />

          <ShowMoreButton />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};


MainPage.propTypes = {
  promoMovie: promoMovieTypes.isRequired,
  authorizationStatus: authorizationStatusTypes,
};


export default MainPage;
