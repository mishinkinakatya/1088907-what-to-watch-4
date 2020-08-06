import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {activeMovieTypes, isVideoPlayerPageOpenTypes, promoMovieTypes, authorizationStatusTypes} from "../../types/types.js";
import MainPage from "../main-page/main-page.jsx";
// import MoviePage from "../movie-page/movie-page.jsx";
// import PlayerPage from "../player-page/player-page.jsx";
import {connect} from "react-redux";
import {getActiveMovie, getIsVideoPlayerPageOpen} from "../../store/reducer/cinema/selectors.js";
import {getPromoMovie} from "../../store/reducer/data/selectors.js";
import LoadingPage from "../loading-page/loading-page.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import {getAuthorizationStatus} from "../../store/reducer/user/selectors.js";
// import AddReviewPage from "../add-review-page/add-review-page.jsx";
import {AppRoute} from "../../utils/const.js";
import history from "../../history.js";
import MyListPage from "../my-list-page/my-list-page.jsx";


const App = (props) => {
  const {promoMovie, authorizationStatus} = props;

  // const renderApp = () => {
  //   if (isVideoPlayerPageOpen) {
  //     return <PlayerPage />;
  //   }
  //   if (activeMovie) {
  //     return <MoviePage authorizationStatus={authorizationStatus} />;
  //   }

  //   if (promoMovie) {
  //     return <MainPage authorizationStatus={authorizationStatus} promoMovie={promoMovie} />;
  //   }

  //   return (
  //     <LoadingPage />
  //   );
  // };

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE}>
          {() => {
            if (promoMovie) {
              return <MainPage authorizationStatus={authorizationStatus} promoMovie={promoMovie} />;
            }

            return (
              <LoadingPage />
            );
          }}
        </Route>
        <Route exact path={AppRoute.SIGN_IN_PAGE}>
          <SignInPage />;
        </Route>
        <Route exact path={AppRoute.MY_LIST_PAGE}>
          <MyListPage />;
        </Route>
        {/* <Route exact path={`${AppRoute.MOVIE_PAGE}/:id`}>
          {() => {
            if (activeMovie || promoMovie) {
              return <MoviePage authorizationStatus={authorizationStatus} />;
            } else {
              return (
                <LoadingPage />
              );
            }
          }}
        </Route>
        <Route exact path={`${AppRoute.PLAYER_PAGE}/:id`}>
          <PlayerPage />;
        </Route>
        <Route exact path={`${AppRoute.ADD_REVIEW_PAGE}/:id/review`}>
          {() => {
            if (activeMovie || promoMovie) {
              return <AddReviewPage activeMovie={activeMovie || promoMovie} />;
            } else {
              return (
                <LoadingPage />
              );
            }
          }}
        </Route> */}
      </Switch>
    </Router>
  );
};


App.propTypes = {
  activeMovie: activeMovieTypes,
  isVideoPlayerPageOpen: isVideoPlayerPageOpenTypes,
  promoMovie: promoMovieTypes,
  authorizationStatus: authorizationStatusTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: getActiveMovie(state),
    isVideoPlayerPageOpen: getIsVideoPlayerPageOpen(state),
    promoMovie: getPromoMovie(state),
    authorizationStatus: getAuthorizationStatus(state),
  };
};


export {App};
export default connect(mapStateToProps)(App);
