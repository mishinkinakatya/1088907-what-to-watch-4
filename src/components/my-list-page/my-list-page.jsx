import React from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import PageHeader from "../page-header/page-header.jsx";
import {authorizationStatusTypes} from "../../types/types.js";

const MyListPage = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-page">
      <PageHeader authorizationStatus={authorizationStatus} />

      <MoviesList />

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyListPage.propTypes = {
  authorizationStatus: authorizationStatusTypes,
};


export default MyListPage;
