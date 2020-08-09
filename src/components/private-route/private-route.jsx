import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {stringNotRequiredTypes, boolRequiredTypes, stringRequiredTypes, funcRequiredTypes} from "../../types/types.js";
import {getAuthorizationStatus} from "../../store/reducer/user/selectors.js";
import {AppRoute, AuthorizationStatus} from "../../utils/const.js";


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
  authorizationStatus: stringNotRequiredTypes,
  exact: boolRequiredTypes,
  path: stringRequiredTypes,
  render: funcRequiredTypes,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
