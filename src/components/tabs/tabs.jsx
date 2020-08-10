import React from "react";
import {connect} from "react-redux";
import {stringNotRequiredTypes, funcRequiredTypes, movieNotRequiredTypes, reviewsRequiredTypes} from "../../types/types.js";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {getReviews} from "../../store/reducer/data/selectors.js";
import {TabsName} from "../../utils/const.js";


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
  activeMovie: movieNotRequiredTypes,
  reviews: reviewsRequiredTypes,
  activeItem: stringNotRequiredTypes,
  onActiveItemEvent: funcRequiredTypes,
};


const mapStateToProps = (state) => {
  return {
    reviews: getReviews(state),
  };
};


export {Tabs};
export default withActiveItem(connect(mapStateToProps, null)(Tabs));
