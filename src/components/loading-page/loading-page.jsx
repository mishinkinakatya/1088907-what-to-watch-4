import React from "react";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";


const LoadingPage = () => {
  return (
    <React.Fragment>
      <section className="movie-card">
        <h1 className="visually-hidden">WTW</h1>

        <PageHeader />

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


export default LoadingPage;
