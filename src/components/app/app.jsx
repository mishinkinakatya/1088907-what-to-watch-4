import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {activeMovieTypes, isVideoPlayerPageOpenTypes} from "../../types/types.js";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PlayerPage from "../player-page/player-page.jsx";
import {connect} from "react-redux";
import {getActiveMovie, getIsVideoPlayerPageOpen} from "../../store/reducer/cinema/selectors.js";


const App = (props) => {
  const {activeMovie, isVideoPlayerPageOpen} = props;

  const renderApp = () => {
    if (isVideoPlayerPageOpen) {
      return <PlayerPage />;
    }
    if (activeMovie) {
      return <MoviePage />;
    }
    return <MainPage />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp()}
        </Route>
        <Route exact path="/movie-page">
          <MoviePage />;
        </Route>
        <Route exact path="/player-page">
          <PlayerPage />;
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  activeMovie: activeMovieTypes,
  isVideoPlayerPageOpen: isVideoPlayerPageOpenTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: getActiveMovie(state),
    isVideoPlayerPageOpen: getIsVideoPlayerPageOpen(state),
  };
};


export {App};
export default connect(mapStateToProps)(App);
