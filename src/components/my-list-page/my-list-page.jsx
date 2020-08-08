import React from "react";
import {stringNotRequiredTypes} from "../../types/types.js";
import MoviesList from "../movies-list/movies-list.jsx";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import {AppPages} from "../../utils/const.js";

const MyListPage = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-page">
      <PageHeader authorizationStatus={authorizationStatus} activePage={AppPages.MY_LIST_PAGE} />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList />
      </section>

      <PageFooter />
    </div>
  );
};

MyListPage.propTypes = {
  authorizationStatus: stringNotRequiredTypes,
};


export default MyListPage;
