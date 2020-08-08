import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {stringNotRequiredTypes, movieNotRequiredTypes, authInfoNotRequiredTypes} from "../../types/types.js";
import {getAuthInfo} from "../../store/reducer/user/selectors.js";
import {AuthorizationStatus, AppRoute, AppPages} from "../../utils/const.js";


const HeaderClass = {
  [AppPages.MAIN_PAGE]: `page-header movie-card__head`,
  [AppPages.MOVIE_PAGE]: `page-header movie-card__head`,
  [AppPages.SIGN_IN_PAGE]: `page-header user-page__head`,
  [AppPages.MY_LIST_PAGE]: `page-header user-page__head`,
  [AppPages.ADD_REVIEW_PAGE]: `page-header`,
};

const getHeaderSpecific = (activePage, activeMovie) => {
  switch (activePage) {
    case AppPages.SIGN_IN_PAGE:
      return <h1 className="page-title user-page__title">Sign in</h1>;
    case AppPages.MY_LIST_PAGE:
      return <h1 className="page-title user-page__title">My list</h1>;
    case AppPages.ADD_REVIEW_PAGE:
      return <nav className="breadcrumbs">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link to={`${AppRoute.MOVIE_PAGE}/${activeMovie.id}`} href="movie-page.html" className="breadcrumbs__link">{activeMovie.title}</Link>
          </li>
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link">Add review</a>
          </li>
        </ul>
      </nav>;
    default:
      return ``;
  }
};

const PageHeader = (props) => {
  const {authorizationStatus, activePage, activeMovie, authInfo} = props;

  return (
    <header className={HeaderClass[activePage]}>
      <div className="logo">
        <Link to={AppRoute.MAIN_PAGE} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {getHeaderSpecific(activePage, activeMovie)}
      {activePage !== AppPages.SIGN_IN_PAGE
        ? <div className="user-block">
          {authorizationStatus === AuthorizationStatus.AUTH
            ? <Link to={AppRoute.MY_LIST_PAGE}>
              <div className="user-block__avatar">
                <img src={authInfo.avatarUrl} alt={authInfo.name} width="63" height="63" />
              </div>
            </Link>
            : <Link to={AppRoute.SIGN_IN_PAGE} className="user-block__link">Sign in</Link>
          }
        </div>
        : ``
      }
    </header>
  );
};


PageHeader.propTypes = {
  authorizationStatus: stringNotRequiredTypes,
  activePage: stringNotRequiredTypes,
  activeMovie: movieNotRequiredTypes,
  authInfo: authInfoNotRequiredTypes,
};

const mapStateToProps = (state) => {
  return {
    authInfo: getAuthInfo(state),
  };
};


export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
