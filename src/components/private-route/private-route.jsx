import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../utils/const.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {authorizationStatusTypes, exactTypes, pathTypes, renderTypes} from "../../types/types.js";


const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.SIGN_IN_PAGE} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: authorizationStatusTypes,
  exact: exactTypes,
  path: pathTypes,
  render: renderTypes,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
