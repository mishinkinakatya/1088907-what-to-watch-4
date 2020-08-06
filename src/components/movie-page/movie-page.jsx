import React from "react";
import {connect} from "react-redux";
import {movieTypes, authorizationStatusTypes} from "../../types/types.js";
import Tabs from "../tabs/tabs.jsx";
import SimilarMoviesList from "../similar-movies-list/similar-movies-list.jsx";
import {getActiveMovie} from "../../store/reducer/cinema/selectors.js";
import {getPromoMovie} from "../../store/reducer/data/selectors.js";
import PageHeader from "../page-header/page-header.jsx";
import {AuthorizationStatus, AppRoute, AppPages} from "../../utils/const.js";
import {Link} from "react-router-dom";
import PageFooter from "../page-footer/page-footer.jsx";


const MoviePage = (props) => {
  const {activeMovie, authorizationStatus} = props;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={activeMovie.bgPoster.image} alt={activeMovie.bgPoster.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader authorizationStatus={authorizationStatus} activePage={AppPages.MOVIE_PAGE} />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{activeMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{activeMovie.genre}</span>
                <span className="movie-card__year">{activeMovie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <Link to={`${AppRoute.PLAYER_PAGE}/${activeMovie.id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>

                {authorizationStatus === AuthorizationStatus.AUTH
                  ? <Link to={`${AppRoute.ADD_REVIEW_PAGE}/${activeMovie.id}/review`} className="btn movie-card__button">Add review</Link>
                  : ``
                }

              </div>
            </div>
          </div>
        </div >

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={activeMovie.poster.image} alt={activeMovie.poster.title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs />
            </div>
          </div>
        </div>
      </section >

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <SimilarMoviesList />
        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};


MoviePage.propTypes = {
  activeMovie: movieTypes,
  authorizationStatus: authorizationStatusTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: getActiveMovie(state) || getPromoMovie(state),
  };
};


export {MoviePage};
export default connect(mapStateToProps, null)(MoviePage);
