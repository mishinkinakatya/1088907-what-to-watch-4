import React from "react";
import {authorizationStatusTypes} from "../../types/types.js";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";


const LoadingPage = (props) => {
  const {authorizationStatus} = props;
  return (
    <React.Fragment>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>

        <PageHeader authorizationStatus={authorizationStatus} />

        <div className="movie-card__wrap">
          <div className="movie-card__info">

            <div className="movie-card__desc">
              <h2 className="movie-card__title">Loading...</h2>
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


LoadingPage.propTypes = {
  authorizationStatus: authorizationStatusTypes,
};


export default LoadingPage;
