import React from "react";
import {connect} from "react-redux";
import {movieTypes, onPlayButtonClickTypes} from "../../types/types.js";
import Tabs from "../tabs/tabs.jsx";
import SimilarMoviesList from "../similar-movies-list/similar-movies-list.jsx";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import {getActiveMovie} from "../../store/reducer/cinema/selectors.js";
import {getPromoMovie} from "../../store/reducer/data/selectors.js";


const MoviePage = (props) => {
  const {activeMovie, onPlayButtonClick} = props;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={activeMovie.bgPoster.image} alt={activeMovie.bgPoster.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{activeMovie.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{activeMovie.genre}</span>
                <span className="movie-card__year">{activeMovie.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={onPlayButtonClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
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

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};


MoviePage.propTypes = {
  activeMovie: movieTypes,
  onPlayButtonClick: onPlayButtonClickTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: getActiveMovie(state) || getPromoMovie(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(ActionCreator.openVideoPlayerPage());
  },
});


export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
