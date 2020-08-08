import React, {Fragment} from "react";
import {Switch, Route, Router, Link} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history.js";
import {stringRequiredTypes} from "../../types/types.js";
import AddReviewPage from "../add-review-page/add-review-page.jsx";
import MainPage from "../main-page/main-page.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import MyListPage from "../my-list-page/my-list-page.jsx";
import LoadingPage from "../loading-page/loading-page.jsx";
import PlayerPage from "../player-page/player-page.jsx";
import SignInPage from "../sign-in-page/sign-in-page.jsx";
import {getLoadingStatus} from "../../store/reducer/data/selectors.js";
import {AppRoute, LoadingStatus} from "../../utils/const.js";


const App = (props) => {
  const {loadingStatus} = props;

  return (
    <Router history={history}>
      {loadingStatus === LoadingStatus.LOADING ?
        <LoadingPage />
        : <Switch>
          <Route exact path={AppRoute.MAIN_PAGE}
            render={() => <MainPage />}
          />
          <Route exact path={AppRoute.SIGN_IN_PAGE}
            render={() => <SignInPage />}
          />
          <Route exact path={AppRoute.MY_LIST_PAGE}
            render={() => <MyListPage />}
          />
          <Route exact path={`${AppRoute.MOVIE_PAGE}/:id`}
            render={(propsRoute) => <MoviePage propsRoute={propsRoute} />}
          />
          <Route exact path={`${AppRoute.PLAYER_PAGE}/:id`}
            render={(propsRoute) => <PlayerPage propsRoute={propsRoute} />}
          />
          <Route exact path={`${AppRoute.MOVIE_PAGE}/:id${AppRoute.ADD_REVIEW_PAGE}`}
            render={(propsRoute) => <AddReviewPage propsRoute={propsRoute} />}
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
      }
    </Router>
  );
};


App.propTypes = {
  loadingStatus: stringRequiredTypes,
};


const mapStateToProps = (state) => {
  return {
    loadingStatus: getLoadingStatus(state),
  };
};


export {App};
export default connect(mapStateToProps)(App);
