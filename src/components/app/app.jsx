import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeMovie: null};
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  render() {
    const {promoMovie} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage movie={this.state.activeMovie ? this.state.activeMovie : promoMovie} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {promoMovie, movies} = this.props;

    if (this.state.activeMovie) {
      return <MoviePage movie={this.state.activeMovie} />;
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
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
