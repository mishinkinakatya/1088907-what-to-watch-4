import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {stringNotRequiredTypes, movieNotRequiredTypes, authInfoNotRequiredTypes} from "../../types/types.js";
import {getAuthInfo, getAuthorizationStatus} from "../../store/reducer/user/selectors.js";
import {AuthorizationStatus, AppRoute, AppPages} from "../../utils/const.js";


const headerClasses = {
  'page-header movie-card__head': [
    AppPages.MAIN_PAGE,
    AppPages.MAIN_PAGE,
  ],
  'page-header user-page__head': [
    AppPages.SIGN_IN_PAGE,
    AppPages.MY_LIST_PAGE,
    AppPages.ERROR_PAGE,
    AppPages.LOADING_PAGE,
  ],
  'page-header': [
    AppPages.ADD_REVIEW_PAGE,
  ]
};

const getClassModifer = (activePage) => Object.keys(headerClasses).find((cl) => headerClasses[cl].includes(activePage));

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
    <header className={getClassModifer(activePage)}>
      <Link to={AppRoute.MAIN_PAGE} className="logo__link">
        <div className="logo">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </div>
      </Link>
      {getHeaderSpecific(activePage, activeMovie)}
      {activePage === AppPages.ERROR_PAGE
        ? <div className="user-block">
          <Link to={AppRoute.MAIN_PAGE} className="user-block__link">Close</Link>
        </div>
        : ``
      }
      {
        activePage !== AppPages.SIGN_IN_PAGE && activePage !== AppPages.ERROR_PAGE && activePage !== AppPages.LOADING_PAGE
          ? <div className="user-block">
            {authorizationStatus === AuthorizationStatus.AUTH
              ? <Link to={AppRoute.MY_LIST_PAGE}>
                <div className="user-block__avatar">
                  <img src={authInfo.avatarUrl} alt={authInfo.name} width="63" height="63" />
                </div>
              </Link>
              : <Link to={(location) => ({
                pathname: AppRoute.SIGN_IN_PAGE,
                state: {
                  from: {pathname: location.pathname}
                }
              })
              } className="user-block__link">Sign in</Link>
            }
          </div>
          : ``
      }
    </header >
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
    authorizationStatus: getAuthorizationStatus(state),
  };
};


export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
