import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {moviesTypes, reviewsTypes, promoMovieTypes, promoMovieReviewsTypes, activeGenreTypes, allGenresTypes, onGenreClickTypes, onShowMoreButtonClickTypes, countMoviesOnMainPageTypes, onCardClickTypes, activeMovieTypes} from "../../types/types.js";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {ActionCreator} from "../../store/actions.js";
import {connect} from "react-redux";
import {getMoviesListOfActiveGenre} from "../../utils/fn.js";


const COUNT_VISIBLE_SIMILAR_MOVIES = 4;

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onCardClick} = this.props;
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
              onCardClick={onCardClick}
            />;
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _getDataForMoviePage() {
    const {movies, promoMovie, promoMovieReviews, reviews, activeMovie} = this.props;

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
    const {movies, promoMovie, activeGenre, allGenres, maxCountOfVisibleMovies, onGenreClick, onShowMoreButtonClick, onCardClick, activeMovie} = this.props;
    const {currentMovie, currentMovieReviews, similarMovies} = this._getDataForMoviePage();

    if (activeMovie) {
      return <MoviePage
        movie={currentMovie}
        reviews={currentMovieReviews}
        similarMovies={similarMovies}
        onCardClick={onCardClick}
      />;
    }

    return <MainPage
      promoMovie={promoMovie}
      movies={getMoviesListOfActiveGenre(movies, activeGenre)}
      allGenres={allGenres}
      activeGenre={activeGenre}
      onCardClick={onCardClick}
      onGenreClick={onGenreClick}
      onShowMoreButtonClick={onShowMoreButtonClick}
      countMoviesOfActiveGenre={getMoviesListOfActiveGenre(movies, activeGenre).length}
      maxCountOfVisibleMovies={maxCountOfVisibleMovies}
    />;
  }
}


App.propTypes = {
  movies: moviesTypes,
  promoMovie: promoMovieTypes,
  promoMovieReviews: promoMovieReviewsTypes,
  reviews: reviewsTypes,
  activeMovie: activeMovieTypes,
  activeGenre: activeGenreTypes,
  onGenreClick: onGenreClickTypes,
  onCardClick: onCardClickTypes,
  allGenres: allGenresTypes,
  onShowMoreButtonClick: onShowMoreButtonClickTypes,
  maxCountOfVisibleMovies: countMoviesOnMainPageTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    activeMovie: state.activeMovie,
    activeGenre: state.activeGenre,
    allGenres: state.allGenres,
    maxCountOfVisibleMovies: state.maxCountOfVisibleMovies,
    promoMovie: state.promoMovie,
    promoMovieReviews: state.promoMovieReviews,
    reviews: state.reviews,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(activeGenre) {
    dispatch(ActionCreator.actionChangeActiveGenre(activeGenre));
  },
  onCardClick(activeMovie) {
    dispatch(ActionCreator.actionChangeActiveMovie(activeMovie));
  },
  onShowMoreButtonClick() {
    dispatch(ActionCreator.actionChangeMaxCountOfVisibleMovies());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
