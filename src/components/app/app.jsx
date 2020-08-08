import React, {Fragment} from "react";
import {Switch, Route, Router, Link} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history.js";
import {movieNotRequiredTypes, stringNotRequiredTypes, stringRequiredTypes} from "../../types/types.js";
import AddReviewPage from "../add-review-page/add-review-page.jsx";
import ErrorPage from "../error-page/error-page.jsx";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import MyListPage from "../my-list-page/my-list-page.jsx";
import LoadingPage from "../loading-page/loading-page.jsx";
import PlayerPage from "../player-page/player-page.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import {getPromoMovie, getAddReviewStatus, getLoadingStatus} from "../../store/reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../store/reducer/user/selectors.js";
import {AppRoute, LoadingStatus} from "../../utils/const.js";


const App = (props) => {
  const {promoMovie, authorizationStatus, loadingStatus} = props;

  return (
    <React.Fragment>
      {loadingStatus === LoadingStatus.LOADING ?
        <LoadingPage authorizationStatus={authorizationStatus} />
        : <Router history={history}>
          <Switch>
            <Route exact path={AppRoute.MAIN_PAGE}
              render={() => {
                // if (promoMovie) {
                  return <MainPage authorizationStatus={authorizationStatus} promoMovie={promoMovie} />;
                // }
              }
              }
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
              render={(propsRoute) => {
                return <MoviePage propsRoute={propsRoute} authorizationStatus={authorizationStatus} />;
              }} />;
            <Route exact path={`${AppRoute.PLAYER_PAGE}/:id`}
              render={(propsRoute) => {
                return <PlayerPage propsRoute={propsRoute} />;
              }} />;
            <Route exact path={`${AppRoute.MOVIE_PAGE}/:id${AppRoute.ADD_REVIEW_PAGE}`}
              render={(propsRoute) => {
                return <AddReviewPage propsRoute={propsRoute} authorizationStatus={authorizationStatus} />;
              }}
            />
            <Route
              render={() => (
                <Fragment>
                  <h1>
                    404.
                    <br />
                    <small>Page not found</small>
                  </h1>
                  <Link to={AppRoute.MAIN_PAGE}>Go to main page</Link>
                </Fragment>
              )}
            />
          </Switch>
        </Router>}
    </React.Fragment>
  );
};


App.propTypes = {
  promoMovie: movieNotRequiredTypes,
  authorizationStatus: stringNotRequiredTypes,
  addReviewStatus: stringRequiredTypes,
  loadingStatus: stringRequiredTypes,
};


const mapStateToProps = (state) => {
  return {
    promoMovie: getPromoMovie(state),
    authorizationStatus: getAuthorizationStatus(state),
    addReviewStatus: getAddReviewStatus(state),
    loadingStatus: getLoadingStatus(state),
  };
};


export {App};
export default connect(mapStateToProps)(App);
