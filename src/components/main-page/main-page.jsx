import React from "react";
import {movieNotRequiredTypes, stringNotRequiredTypes} from "../../types/types.js";
import GenresList from "../genres-list/genres-list.jsx";
import MovieButtons from "../movie-buttons/movie-buttons.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import {AppPages} from "../../utils/const.js";

const MainPage = (props) => {
  const {promoMovie, authorizationStatus} = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoMovie.bgPosterImage} alt={promoMovie.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader authorizationStatus={authorizationStatus} activePage={AppPages.MAIN_PAGE} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoMovie.posterImage} alt={promoMovie.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoMovie.genre}</span>
                <span className="movie-card__year">{promoMovie.year}</span>
              </p>

              <MovieButtons movie={promoMovie} />

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
  promoMovie: movieNotRequiredTypes.isRequired,
  authorizationStatus: stringNotRequiredTypes,
};


export default MainPage;
