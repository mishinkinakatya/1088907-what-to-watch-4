import React from "react";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import {AppPages} from "../../utils/const.js";


const ErrorPage = () => {
  return (
    <React.Fragment>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>

        <PageHeader activePage={AppPages.ERROR_PAGE} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">

            <div className="movie-card__desc">
              <h2 className="movie-card__title">Oops! An error has occurred. Please try again later</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <PageFooter />
      </div>
    </React.Fragment>
  );
};


export default ErrorPage;
