import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {promoMovieTypes, activeMovieTypes} from "../../types/types.js";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie-page">
            <MoviePage />;
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {promoMovie, activeMovie} = this.props;

    if (activeMovie) {
      return <MoviePage />;
    }

    return <MainPage
      promoMovie={promoMovie}
    />;
  }
}


App.propTypes = {
  promoMovie: promoMovieTypes,
  activeMovie: activeMovieTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: state.activeMovie,
    promoMovie: state.promoMovie,
  };
};


export default connect(mapStateToProps)(App);
