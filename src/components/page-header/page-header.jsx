import React from "react";
import {connect} from "react-redux";
import {onSignInButtonClickTypes, authorizationStatusTypes} from "../../types/types.js";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import {AuthorizationStatus} from "../../utils/const.js";

const PageHeader = (props) => {
  const {authorizationStatus, onSignInButtonClick} = props;
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {authorizationStatus === AuthorizationStatus.AUTH
        ? <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
        : <div className="user-block">
          <a href="#" className="user-block__link" onClick={onSignInButtonClick}>Sign in</a>
        </div>
      }
    </header>
  );
};


PageHeader.propTypes = {
  onSignInButtonClick: onSignInButtonClickTypes,
  authorizationStatus: authorizationStatusTypes,
};


const mapDispatchToProps = (dispatch) => ({
  onSignInButtonClick() {
    dispatch(ActionCreator.openSignInPage());
  },
});

export {PageHeader};
export default connect(null, mapDispatchToProps)(PageHeader);
