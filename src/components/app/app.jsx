import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {moviesTypes, reviewsTypes, promoMovieTypes, promoMovieReviewsTypes} from "../../types/types.js";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";


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
            <MoviePage movie={currentMovie} reviews={currentMovieReviews} similarMovies={similarMovies} onCardClick={this._handleCardClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _getDataForMoviePage() {
    const {promoMovie, promoMovieReviews, movies, reviews} = this.props;
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
    const {promoMovie, movies} = this.props;
    const {currentMovie, currentMovieReviews, similarMovies} = this._getDataForMoviePage();

    if (this.state.activeMovie) {
      return <MoviePage movie={currentMovie} reviews={currentMovieReviews} similarMovies={similarMovies} onCardClick={this._handleCardClick}/>;
    }

    return <MainPage promoMovie={promoMovie} movies={movies} onCardClick={this._handleCardClick} />;
  }

  _handleCardClick(movie) {
    this.setState({activeMovie: movie});
  }
}


App.propTypes = {
  promoMovie: promoMovieTypes,
  promoMovieReviews: promoMovieReviewsTypes,
  movies: moviesTypes,
  reviews: reviewsTypes,
};

export default App;
