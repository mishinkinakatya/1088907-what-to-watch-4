import React from "react";
import {connect} from "react-redux";
import {movieTypes, reviewsTypes, onCardClickTypes, activeItemTypes, onItemClickTypes} from "../../types/types.js";
import Tabs from "../tabs/tabs.jsx";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import SimilarMoviesList from "../similar-movies-list/similar-movies-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {TabsName} from "../../utils/const.js";
import {ActionCreator} from "../../store/actions.js";


const renderTabContent = (movie, reviews, activeItem) => {
  switch (activeItem) {
    case TabsName.DETAILS:
      return <MovieDetails movie={movie} />;
    case TabsName.REVIEWS:
      return <MovieReviews reviews={reviews} />;
    default:
      return <MovieOverview movie={movie} />;
  }
};

const MoviePage = (props) => {
  const {activeMovie, reviews, activeItem, onActiveItemEvent} = props;

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
                <button className="btn btn--play movie-card__button" type="button">
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
              <Tabs tabs={TabsName} activeTab={activeItem || TabsName.OVERVIEW} onActiveItemEvent={onActiveItemEvent} />
              {renderTabContent(activeMovie, reviews, activeItem || TabsName.OVERVIEW)}

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
  reviews: reviewsTypes,
  onCardClick: onCardClickTypes,
  activeItem: activeItemTypes,
  onActiveItemEvent: onItemClickTypes,
};


const mapStateToProps = (state) => {
  const currentMovie = state.activeMovie || state.promoMovie;
  const moviesReviews = state.activeMovie ? state.reviews : state.promoMovieReviews;
  const currentMovieReviews = moviesReviews.map((review) => review.movieId === currentMovie.id ? review : null).filter((review) => review !== null);
  return {
    movies: state.movies,
    activeMovie: currentMovie,
    activeGenre: state.activeGenre,
    promoMovie: state.promoMovie,
    promoMovieReviews: state.promoMovieReviews,
    reviews: currentMovieReviews,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCardClick(activeMovie) {
    dispatch(ActionCreator.actionChangeActiveMovie(activeMovie));
  },
});


export default withActiveItem(connect(mapStateToProps, mapDispatchToProps)(MoviePage));
