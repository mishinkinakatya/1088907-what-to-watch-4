import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {funcRequiredTypes} from "../../types/types.js";
import MoviesList from "../movies-list/movies-list.jsx";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import {Operations} from "../../store/reducer/data/data.js";
import {AppPages} from "../../utils/const.js";


class MyListPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavotite} = this.props;
    loadFavotite();
  }

  componentDidUpdate() {
    const {loadFavotite} = this.props;
    loadFavotite();
  }

  render() {
    return (
      <div className="user-page">
        <PageHeader activePage={AppPages.MY_LIST_PAGE} />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesList activePage={AppPages.MY_LIST_PAGE} />
        </section>

        <PageFooter />
      </div>
    );
  }
}


MyListPage.propTypes = {
  loadFavotite: funcRequiredTypes,
};


const mapDispatchToProps = (dispatch) => ({
  loadFavotite() {
    dispatch(Operations.loadFaforite());
  },
});


export {MyListPage};
export default connect(null, mapDispatchToProps)(MyListPage);
