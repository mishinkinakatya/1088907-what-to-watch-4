import React from "react";
import {activeItemTypes, onItemClickTypes, activeMovieTypes, reviewsTypes} from "../../types/types.js";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import {TabsName} from "../../utils/const.js";
import {ActionCreator} from "../../store/actions/cinema/cinema.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {connect} from "react-redux";
import {getActiveMovie} from "../../store/reducer/cinema/selectors.js";
import {getPromoMovie, getReviews} from "../../store/reducer/data/selectors.js";


const ACTIVE_MOVIE_NAV_ITEM = `movie-nav__item--active`;

const renderTabContent = (movie, reviews, activeItem) => {
  switch (activeItem) {
    case TabsName.DETAILS:
      return <MovieDetails movie={movie} />;
    case TabsName.REVIEWS:
      return <MovieReviews reviews={reviews} />;
    default:
      return <MovieOverview movie={movie} />;
  }
};

const Tabs = (props) => {
  const {activeMovie, reviews, activeItem, onActiveItemEvent} = props;
  const tabsName = Object.values(TabsName);
  const activeTab = activeItem || TabsName.OVERVIEW;

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabsName.map((tab) => {
            return (
              <li key={tab} className={`movie-nav__item ${tab === activeTab ? ACTIVE_MOVIE_NAV_ITEM : ``}`}>
                <a href="#" className="movie-nav__link" onClick={(evt) => {
                  evt.preventDefault();
                  onActiveItemEvent(tab);
                }}>{tab}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {renderTabContent(activeMovie, reviews, activeItem || TabsName.OVERVIEW)}
    </React.Fragment>
  );
};


Tabs.propTypes = {
  activeMovie: activeMovieTypes,
  reviews: reviewsTypes,
  activeItem: activeItemTypes,
  onActiveItemEvent: onItemClickTypes,
};


const mapStateToProps = (state) => {
  const currentMovie = getActiveMovie(state) || getPromoMovie(state);
  return {
    activeMovie: currentMovie,
    promoMovie: getPromoMovie(state),
    reviews: getReviews(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCardClick(activeMovie) {
    dispatch(ActionCreator.changeActiveMovie(activeMovie));
  },
});


export {Tabs};
export default withActiveItem(connect(mapStateToProps, mapDispatchToProps)(Tabs));
