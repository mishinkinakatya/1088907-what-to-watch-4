import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {activeMovieTypes, isVideoPlayerPageOpenTypes, promoMovieTypes} from "../../types/types.js";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PlayerPage from "../player-page/player-page.jsx";
import {connect} from "react-redux";
import {getActiveMovie, getIsVideoPlayerPageOpen} from "../../store/reducer/cinema/selectors.js";
import {getPromoMovie} from "../../store/reducer/data/selectors.js";
import LoadingPage from "../loading-page/loading-page.jsx";


const App = (props) => {
  const {promoMovie, activeMovie, isVideoPlayerPageOpen} = props;

  const renderApp = () => {
    if (isVideoPlayerPageOpen) {
      return <PlayerPage />;
    }
    if (activeMovie) {
      return <MoviePage />;
    }

    if (promoMovie) {
      return <MainPage promoMovie={promoMovie} />;
    }

    return (
      <LoadingPage />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp()}
        </Route>
        <Route exact path="/movie-page">
          {() => {
            if (activeMovie || promoMovie) {
              return <MoviePage />;
            } else {
              return (
                <LoadingPage />
              );
            }
          }
          }
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
  promoMovie: promoMovieTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: getActiveMovie(state),
    isVideoPlayerPageOpen: getIsVideoPlayerPageOpen(state),
    promoMovie: getPromoMovie(state),
  };
};


export {App};
export default connect(mapStateToProps)(App);
