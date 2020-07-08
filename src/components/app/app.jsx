import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
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
    const {promoMovie, promoMovieReviews, movies, reviews} = this.props;
    const {activeMovie} = this.state;

    const currentMovie = activeMovie ? activeMovie : promoMovie;
    const movieReviews = activeMovie ? reviews : promoMovieReviews;
    const reviewsOfMovie = movieReviews.map((review) => review.movieId === currentMovie.id ? review : null).filter((review) => review !== null);
    const similarMovies = movies.filter((movie) => movie.genre === currentMovie.genre && movie.id !== currentMovie.id).slice(0, COUNT_VISIBLE_SIMILAR_MOVIES);

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage movie={currentMovie} reviews={reviewsOfMovie} similarMovies={similarMovies} onCardClick={this._handleCardClick}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {promoMovie, promoMovieReviews, movies, reviews} = this.props;
    const {activeMovie} = this.state;

    const currentMovie = activeMovie ? activeMovie : promoMovie;
    const movieReviews = activeMovie ? reviews : promoMovieReviews;
    const reviewsOfMovie = movieReviews.map((review) => review.movieId === currentMovie.id ? review : null).filter((review) => review !== null);
    const similarMovies = movies.filter((movie) => movie.genre === currentMovie.genre && movie.id !== currentMovie.id).slice(0, COUNT_VISIBLE_SIMILAR_MOVIES);

    if (this.state.activeMovie) {
      return <MoviePage movie={currentMovie} reviews={reviewsOfMovie} similarMovies={similarMovies} onCardClick={this._handleCardClick}/>;
    }

    return <MainPage promoMovie={promoMovie} movies={movies} onCardClick={this._handleCardClick} />;
  }

  _handleCardClick(movie) {
    this.setState({activeMovie: movie});
  }
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  promoMovieReviews: PropTypes.arrayOf(
      PropTypes.shape({
        movieId: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        dateInMs: PropTypes.number.isRequired,
        ratingScore: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        poster: PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
        }).isRequired,
        bgPoster: PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.shape({
          score: PropTypes.number.isRequired,
          count: PropTypes.number.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starrings: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
      }).isRequired
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        movieId: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        dateInMs: PropTypes.number.isRequired,
        ratingScore: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
};

export default App;
