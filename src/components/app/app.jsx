import React from "react";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history.js";
import {moviesRequiredTypes, movieNotRequiredTypes, stringRequiredTypes, stringNotRequiredTypes, funcRequiredTypes} from "../../types/types.js";
import AddReviewPage from "../add-review-page/add-review-page.jsx";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import MyListPage from "../my-list-page/my-list-page.jsx";
import LoadingPage from "../loading-page/loading-page.jsx";
import PlayerPage from "../player-page/player-page.jsx";
import PrivateRoute from "../private-route/private-route.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import {getMovies, getPromoMovie, getAddReviewStatus, getLoadError} from "../../store/reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../store/reducer/user/selectors.js";
import {AppRoute, SendingStatus, AuthorizationStatus} from "../../utils/const.js";
import {ActionCreator} from "../../store/actions/data/data.js";
import {Operations} from "../../store/reducer/data/data.js";


const App = (props) => {
  const {movies, promoMovie, addReviewStatus, authorizationStatus, textOfError, onCloseButtonClick} = props;

  return (
    textOfError ? <React.Fragment>
      <div>
        <h1>{textOfError}</h1>
        <button type="button" onClick={onCloseButtonClick}>Close</button>
      </div>
    </React.Fragment> :
      <Router history={history}>
        {movies.length !== 0 && promoMovie !== null ?
          <Switch>
            <Route exact path={AppRoute.MAIN_PAGE}
              render={() => <MainPage />}
            />
            <Route exact path={AppRoute.SIGN_IN_PAGE}
              render={() => {
                return authorizationStatus === AuthorizationStatus.AUTH
                  ? <Redirect to={AppRoute.MAIN_PAGE} />
                  : <SignInPage />;
              }}
            />
            <Route exact path={`${AppRoute.MOVIE_PAGE}/:id`}
              render={(propsRoute) => <MoviePage propsRouteId={Number(propsRoute.match.params.id)} />} />
            <Route exact path={`${AppRoute.PLAYER_PAGE}/:id`}
              render={(propsRoute) => <PlayerPage propsRoute={Number(propsRoute.match.params.id)} />}
            />
            <PrivateRoute exact path={AppRoute.MY_LIST_PAGE}
              render={() => <MyListPage />}
            />
            <PrivateRoute exact path={`${AppRoute.MOVIE_PAGE}/:id${AppRoute.ADD_REVIEW_PAGE}`}
              render={(propsRoute) => {
                const propsRouteId = Number(propsRoute.match.params.id);
                return addReviewStatus === SendingStatus.SUCCESS
                  ? <Redirect to={`${AppRoute.MOVIE_PAGE}/${propsRouteId}`} />
                  : <AddReviewPage propsRouteId={propsRouteId} />;
              }}
            />
          </Switch>
          : <LoadingPage />}
      </Router>
  );
};


App.propTypes = {
  movies: moviesRequiredTypes,
  promoMovie: movieNotRequiredTypes,
  addReviewStatus: stringRequiredTypes,
  authorizationStatus: stringRequiredTypes,
  textOfError: stringNotRequiredTypes,
  onCloseButtonClick: funcRequiredTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: getMovies(state),
    promoMovie: getPromoMovie(state),
    addReviewStatus: getAddReviewStatus(state),
    authorizationStatus: getAuthorizationStatus(state),
    textOfError: getLoadError(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCloseButtonClick() {
    dispatch(ActionCreator.showLoadError(null));
    dispatch(Operations.loadMovies());
    dispatch(Operations.loadPromoMovie());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
