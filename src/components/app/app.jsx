import React, {Fragment} from "react";
import {Switch, Route, Router, Link} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history.js";
import {movieNotRequiredTypes, stringNotRequiredTypes, stringRequiredTypes, moviesRequiredTypes} from "../../types/types.js";
import AddReviewPage from "../add-review-page/add-review-page.jsx";
import ErrorPage from "../error-page/error-page.jsx";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import MyListPage from "../my-list-page/my-list-page.jsx";
import LoadingPage from "../loading-page/loading-page.jsx";
import PlayerPage from "../player-page/player-page.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import {getPromoMovie, getAddReviewStatus, getErrorPageStatus, getMovies} from "../../store/reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../store/reducer/user/selectors.js";
import {AppRoute, ErrorPageStatus} from "../../utils/const.js";


const App = (props) => {
  const {promoMovie, movies, authorizationStatus, errorPageStatus} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.MAIN_PAGE}
          render={() => {
            if (errorPageStatus === ErrorPageStatus.SUCCESS) {
              if (promoMovie) {
                return <MainPage authorizationStatus={authorizationStatus} promoMovie={promoMovie} />;
              }

              return (
                <LoadingPage authorizationStatus={authorizationStatus} />
              );
            } else {
              return (
                <ErrorPage authorizationStatus={authorizationStatus} />
              );

            }
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
            if (movies.length !== 0) {
              return <MoviePage propsRoute={propsRoute} authorizationStatus={authorizationStatus} />;
            } else {
              return (
                <LoadingPage authorizationStatus={authorizationStatus} />
              );
            }
          }} />;
        <Route exact path={`${AppRoute.PLAYER_PAGE}/:id`}
          render={(propsRoute) => {
            if (movies.length !== 0) {
              return <PlayerPage propsRoute={propsRoute} />;
            } else {
              return (
                <LoadingPage authorizationStatus={authorizationStatus} />
              );
            }
          }} />;
        <Route exact path={`${AppRoute.MOVIE_PAGE}/:id${AppRoute.ADD_REVIEW_PAGE}`}
          render={(propsRoute) => {
            if (movies.length !== 0) {
              return <AddReviewPage propsRoute={propsRoute} authorizationStatus={authorizationStatus} />;
            } else {
              return (
                <LoadingPage authorizationStatus={authorizationStatus} />
              );
            }
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
    </Router>
  );
};


App.propTypes = {
  movies: moviesRequiredTypes,
  promoMovie: movieNotRequiredTypes,
  authorizationStatus: stringNotRequiredTypes,
  addReviewStatus: stringRequiredTypes,
  errorPageStatus: stringRequiredTypes,
};


const mapStateToProps = (state) => {
  return {
    movies: getMovies(state),
    promoMovie: getPromoMovie(state),
    authorizationStatus: getAuthorizationStatus(state),
    addReviewStatus: getAddReviewStatus(state),
    errorPageStatus: getErrorPageStatus(state),
  };
};


export {App};
export default connect(mapStateToProps)(App);
