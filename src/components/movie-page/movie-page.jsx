import React, {PureComponent} from "react";
import {movieTypes, reviewsTypes, similarMoviesTypes, onCardClickTypes} from "../../types/types.js";
import Tabs from "../tabs/tabs.jsx";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import MoviesList from "../movies-list/movies-list.jsx";


const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

class MoviePage extends PureComponent {
  constructor(props) {
    super(props);

    this._handleTabClick = this._handleTabClick.bind(this);

    this.state = {
      activeTabItem: TABS.OVERVIEW,
    };
  }

  render() {
    const {movie, similarMovies, onCardClick} = this.props;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movie.bgPoster.image} alt={movie.bgPoster.title} />
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
                <h2 className="movie-card__title">{movie.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movie.genre}</span>
                  <span className="movie-card__year">{movie.year}</span>
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
                <img src={movie.poster.image} alt={movie.poster.title} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <Tabs tabs={TABS} activeTab={this.state.activeTabItem} onTabClick={this._handleTabClick} />
                {this._renderTabContent()}

              </div>
            </div>
          </div>
        </section >

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MoviesList movies={similarMovies} onCardClick={onCardClick}/>
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
  }

  _handleTabClick(activeTab) {
    this.setState({
      activeTabItem: activeTab,
    });
  }

  _renderTabContent() {
    const {movie, reviews} = this.props;

    const {activeTabItem} = this.state;
    switch (activeTabItem) {
      case TABS.DETAILS:
        return <MovieDetails movie={movie} />;
      case TABS.REVIEWS:
        return <MovieReviews reviews={reviews} />;
      default:
        return <MovieOverview movie={movie} />;
    }
  }
}


MoviePage.propTypes = {
  movie: movieTypes,
  reviews: reviewsTypes,
  similarMovies: similarMoviesTypes,
  onCardClick: onCardClickTypes,
};

export default MoviePage;