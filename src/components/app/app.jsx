import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {activeMovieTypes} from "../../types/types.js";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import {connect} from "react-redux";


const App = (props) => {
  const {activeMovie} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {activeMovie ? <MoviePage /> : <MainPage />}
        </Route>
        <Route exact path="/movie-page">
          <MoviePage />;
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  activeMovie: activeMovieTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: state.activeMovie,
  };
};


export {App};
export default connect(mapStateToProps)(App);
