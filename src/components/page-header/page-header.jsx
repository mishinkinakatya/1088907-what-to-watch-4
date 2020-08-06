import React from "react";
import {connect} from "react-redux";
import {onSignInButtonClickTypes, authorizationStatusTypes, onAvatarClickTypes} from "../../types/types.js";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import {AuthorizationStatus, AppRoute, AppPages} from "../../utils/const.js";
import {Link} from "react-router-dom";
import {getActivePage} from "../../store/reducer/cinema/selectors.js";

const PageHeader = (props) => {
  const {authorizationStatus, onAvatarClick, onSignInButtonClick, activePage} = props;

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      {activePage === AppPages.MY_LIST_PAGE
        ? <h1 className="page-title user-page__title">My list</h1>
        : ``
      }
      <div className="user-block">
        {authorizationStatus === AuthorizationStatus.AUTH
          ? <Link to={AppRoute.MY_LIST_PAGE}>
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" onClick={onAvatarClick} />
            </div>
          </Link>
          : <Link to={AppRoute.SIGN_IN_PAGE} className="user-block__link" onClick={onSignInButtonClick}>Sign in</Link>
        }
      </div>
    </header>
  );
};


PageHeader.propTypes = {
  onAvatarClick: onAvatarClickTypes,
  onSignInButtonClick: onSignInButtonClickTypes,
  authorizationStatus: authorizationStatusTypes,
};


const mapStateToProps = (state) => {
  return {
    activePage: getActivePage(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onSignInButtonClick() {
    dispatch(ActionCreator.goToSignInPage());
  },
  onAvatarClick() {
    dispatch(ActionCreator.goToMyListPage());
  },
});

export {PageHeader};
export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
