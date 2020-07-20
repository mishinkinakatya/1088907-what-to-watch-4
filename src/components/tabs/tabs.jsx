import React from "react";
import {tabsTypes, activeItemTypes, onItemClickTypes} from "../../types/types.js";


const ACTIVE_MOVIE_NAV_ITEM = `movie-nav__item--active`;

const Tabs = (props) => {
  const {tabs, activeTab, onItemEvent} = props;
  const tabsName = Object.values(tabs);

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabsName.map((tab) => {
          return (
            <li key={tab} className={`movie-nav__item ${tab === activeTab ? ACTIVE_MOVIE_NAV_ITEM : ``}`}>
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                evt.preventDefault();
                onItemEvent(tab);
              }}>{tab}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


Tabs.propTypes = {
  tabs: tabsTypes,
  activeTab: activeItemTypes,
  onItemEvent: onItemClickTypes,
};

export default Tabs;
