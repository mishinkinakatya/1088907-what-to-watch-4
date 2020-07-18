import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {moviesTypes, reviewsTypes, promoMovieTypes, promoMovieReviewsTypes, activeGenreTypes, allGenresTypes, onGenreClickTypes, onShowMoreButtonClickTypes, countMoviesOnMainPageTypes} from "../../types/types.js";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {ActionCreator} from "../../store/actions.js";
import {connect} from "react-redux";
import {getMoviesListOfActiveGenre} from "../../utils/fn.js";


const COUNT_VISIBLE_SIMILAR_MOVIES = 4;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeMovie: null};

    this._handleCardClick = this._handleCardClick.bind(this);
  }

  render() {
    const {currentMovie, currentMovieReviews, similarMovies} = this._getDataForMoviePage();

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage
              movie={currentMovie}
              reviews={currentMovieReviews}
              similarMovies={similarMovies}
              onCardClick={this._handleCardClick}
            />;
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _getDataForMoviePage() {
    const {movies, promoMovie, promoMovieReviews, reviews} = this.props;
    const {activeMovie} = this.state;

    const currentMovie = activeMovie ? activeMovie : promoMovie;
    const moviesReviews = activeMovie ? reviews : promoMovieReviews;
    const currentMovieReviews = moviesReviews.map((review) => review.movieId === currentMovie.id ? review : null).filter((review) => review !== null);
    const similarMovies = movies.filter((movie) => movie.genre === currentMovie.genre && movie.id !== currentMovie.id).slice(0, COUNT_VISIBLE_SIMILAR_MOVIES);

    return ({
      currentMovie,
      currentMovieReviews,
      similarMovies,
    });
  }

  _renderApp() {
    const {movies, promoMovie, activeGenre, allGenres, countOfVisibleMoviesOnMainPage, onGenreClick, onShowMoreButtonClick} = this.props;
    const {currentMovie, currentMovieReviews, similarMovies} = this._getDataForMoviePage();

    if (this.state.activeMovie) {
      return <MoviePage
        movie={currentMovie}
        reviews={currentMovieReviews}
        similarMovies={similarMovies}
        onCardClick={this._handleCardClick}
      />;
    }

    return <MainPage
      promoMovie={promoMovie}
      movies={getMoviesListOfActiveGenre(movies, activeGenre)}
      allGenres={allGenres}
      activeGenre={activeGenre}
      onCardClick={this._handleCardClick}
      onGenreClick={onGenreClick}
      onShowMoreButtonClick={onShowMoreButtonClick}
      countMoviesOfActiveGenre={getMoviesListOfActiveGenre(movies, activeGenre).length}
      countOfVisibleMoviesOnMainPage={countOfVisibleMoviesOnMainPage}
    />;
  }

  _handleCardClick(movie) {
    this.setState({activeMovie: movie});
  }
}


App.propTypes = {
  movies: moviesTypes,
  promoMovie: promoMovieTypes,
  promoMovieReviews: promoMovieReviewsTypes,
  reviews: reviewsTypes,
  activeGenre: activeGenreTypes,
  onGenreClick: onGenreClickTypes,
  allGenres: allGenresTypes,
  onShowMoreButtonClick: onShowMoreButtonClickTypes,
  countOfVisibleMoviesOnMainPage: countMoviesOnMainPageTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    activeGenre: state.activeGenre,
    allGenres: state.allGenres,
    countOfVisibleMoviesOnMainPage: state.countOfVisibleMoviesOnMainPage,
    promoMovie: state.promoMovie,
    promoMovieReviews: state.promoMovieReviews,
    reviews: state.reviews,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(ActionCreator.actionChangeActiveGenre(activeGenre));
  },
  onShowMoreButtonClick(countMoviesOfActiveGenre, countOfVisibleMoviesOnMainPage) {
    dispatch(ActionCreator.actionIncrementCountOfVisibleMovies(countMoviesOfActiveGenre, countOfVisibleMoviesOnMainPage));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
