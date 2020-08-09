import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {movieRequiredTypes, funcRequiredTypes, stringRequiredTypes} from "../../types/types.js";
import ErrorPage from "../error-page/error-page.jsx";
import MovieButtons from "../movie-buttons/movie-buttons.jsx";
import PageHeader from "../page-header/page-header.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import SimilarMoviesList from "../similar-movies-list/similar-movies-list.jsx";
import Tabs from "../tabs/tabs.jsx";
import {getActiveMovieById} from "../../store/reducer/cinema/selectors.js";
import {Operations} from "../../store/reducer/data/data.js";
import {getSendFavotiteStatus} from "../../store/reducer/data/selectors.js";
import {AppPages, SendingStatus} from "../../utils/const.js";


class MoviePage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {activeMovie, loadReviews} = this.props;
    loadReviews(activeMovie.id);
  }

  componentDidUpdate() {
    const {activeMovie, loadReviews} = this.props;
    loadReviews(activeMovie.id);
  }

  render() {
    const {activeMovie, sendFavotiteStatus} = this.props;

    return (
      sendFavotiteStatus === SendingStatus.FAIL ?
        <ErrorPage />
        :
        <React.Fragment>
          <section className="movie-card movie-card--full" style={{background: activeMovie.bgColor}}>
            <div className="movie-card__hero">
              <div className="movie-card__bg">
                <img src={activeMovie.bgPosterImage} alt={activeMovie.title} />
              </div>

              <h1 className="visually-hidden">WTW</h1>

              <PageHeader activePage={AppPages.MOVIE_PAGE} />

              <div className="movie-card__wrap">
                <div className="movie-card__desc">
                  <h2 className="movie-card__title">{activeMovie.title}</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">{activeMovie.genre}</span>
                    <span className="movie-card__year">{activeMovie.year}</span>
                  </p>

                  <MovieButtons movie={activeMovie} activePage={AppPages.MOVIE_PAGE} />
                </div>
              </div>
            </div >

            <div className="movie-card__wrap movie-card__translate-top">
              <div className="movie-card__info">
                <div className="movie-card__poster movie-card__poster--big">
                  <img src={activeMovie.posterImage} alt={activeMovie.title} width="218" height="327" />
                </div>

                <div className="movie-card__desc">
                  <Tabs activeMovie={activeMovie} />
                </div>
              </div>
            </div>
          </section >

          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>

              <SimilarMoviesList activeMovie={activeMovie} />
            </section>

            <PageFooter />
          </div>
        </React.Fragment>
    );
  }
}


MoviePage.propTypes = {
  activeMovie: movieRequiredTypes,
  loadReviews: funcRequiredTypes,
  sendFavotiteStatus: stringRequiredTypes,
};


const mapStateToProps = (state, ownProps) => {
  return {
    activeMovie: getActiveMovieById(state, ownProps),
    sendFavotiteStatus: getSendFavotiteStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadReviews(movieId) {
    dispatch(Operations.loadReviews(movieId));
  },
});


export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
