import React from "react";
import {Switch, Route, Router} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history.js";
import {activeMovieTypes, promoMovieTypes, authorizationStatusTypes, addReviewStatusTypes} from "../../types/types.js";
import AddReviewPage from "../add-review-page/add-review-page.jsx";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import MyListPage from "../my-list-page/my-list-page.jsx";
import LoadingPage from "../loading-page/loading-page.jsx";
import PlayerPage from "../player-page/player-page.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import {getActiveMovie} from "../../store/reducer/cinema/selectors.js";
import {getPromoMovie, getAddReviewStatus} from "../../store/reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../store/reducer/user/selectors.js";
import {AppRoute} from "../../utils/const.js";


const App = (props) => {
  const {promoMovie, activeMovie, authorizationStatus} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE}
          render={() => {
            if (promoMovie) {
              return <MainPage authorizationStatus={authorizationStatus} promoMovie={promoMovie} />;
            }

            return (
              <LoadingPage authorizationStatus={authorizationStatus} />
            );
          }}
        />
        <Route exact path={AppRoute.SIGN_IN_PAGE}
          render={() => {
            return <SignInPage authorizationStatus={authorizationStatus} />;
          }}
        />;
        <Route exact path={AppRoute.MY_LIST_PAGE}
          render={() => {
            return <MyListPage authorizationStatus={authorizationStatus} />;
          }}
        />;
        <Route exact path={`${AppRoute.MOVIE_PAGE}/:id`}
          render={() => {
            if (activeMovie || promoMovie) {
              return <MoviePage authorizationStatus={authorizationStatus} />;
            } else {
              return (
                <LoadingPage authorizationStatus={authorizationStatus} />
              );
            }
          }} />;
        <Route exact path={`${AppRoute.PLAYER_PAGE}/:id`}>
          <PlayerPage />;
        </Route>
        <Route exact path={`${AppRoute.MOVIE_PAGE}/:id${AppRoute.ADD_REVIEW_PAGE}`}
          render={() => {
            if (activeMovie || promoMovie) {
              return <AddReviewPage activeMovie={activeMovie || promoMovie} authorizationStatus={authorizationStatus} />;
            } else {
              return (
                <LoadingPage authorizationStatus={authorizationStatus} />
              );
            }
          }}
        />
      </Switch>
    </Router>
  );
};


App.propTypes = {
  activeMovie: activeMovieTypes,
  promoMovie: promoMovieTypes,
  authorizationStatus: authorizationStatusTypes,
  addReviewStatus: addReviewStatusTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: getActiveMovie(state),
    promoMovie: getPromoMovie(state),
    authorizationStatus: getAuthorizationStatus(state),
    addReviewStatus: getAddReviewStatus(state),
  };
};


export {App};
export default connect(mapStateToProps)(App);
