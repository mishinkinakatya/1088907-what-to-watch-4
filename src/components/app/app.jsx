import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {activeMovieTypes, promoMovieTypes, authorizationStatusTypes} from "../../types/types.js";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PlayerPage from "../player-page/player-page.jsx";
import {connect} from "react-redux";
import {getActiveMovie} from "../../store/reducer/cinema/selectors.js";
import {getPromoMovie} from "../../store/reducer/data/selectors.js";
import LoadingPage from "../loading-page/loading-page.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import {getAuthorizationStatus} from "../../store/reducer/user/selectors.js";
import AddReviewPage from "../add-review-page/add-review-page.jsx";
import {AppRoute} from "../../utils/const.js";
import history from "../../history.js";
import MyListPage from "../my-list-page/my-list-page.jsx";


const App = (props) => {
  const {promoMovie, activeMovie, authorizationStatus} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE}>
          {() => {
            if (promoMovie) {
              return <MainPage authorizationStatus={authorizationStatus} promoMovie={promoMovie}/>;
            }

            return (
              <LoadingPage authorizationStatus={authorizationStatus} />
            );
          }}
        </Route>
        <Route exact path={AppRoute.SIGN_IN_PAGE}>
          <SignInPage authorizationStatus={authorizationStatus} />;
        </Route>
        <Route exact path={AppRoute.MY_LIST_PAGE}>
          <MyListPage authorizationStatus={authorizationStatus} />;
        </Route>
        <Route exact path={`${AppRoute.MOVIE_PAGE}/:id`}>
          {() => {
            if (activeMovie || promoMovie) {
              return <MoviePage authorizationStatus={authorizationStatus} />;
            } else {
              return (
                <LoadingPage authorizationStatus={authorizationStatus} />
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
              return <AddReviewPage activeMovie={activeMovie || promoMovie} authorizationStatus={authorizationStatus} />;
            } else {
              return (
                <LoadingPage authorizationStatus={authorizationStatus} />
              );
            }
          }}
        </Route>
      </Switch>
    </Router>
  );
};


App.propTypes = {
  activeMovie: activeMovieTypes,
  promoMovie: promoMovieTypes,
  authorizationStatus: authorizationStatusTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: getActiveMovie(state),
    promoMovie: getPromoMovie(state),
    authorizationStatus: getAuthorizationStatus(state),
  };
};


export {App};
export default connect(mapStateToProps)(App);
