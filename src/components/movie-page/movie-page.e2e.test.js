import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoviePage from "./movie-page.jsx";
import {movie, movies, reviews, TABS} from "../../mocks/test-data.js";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MoviePageComponent`, () => {
  it(`The state changes when the tab is clicked`, () => {
    const tabsName = Object.values(TABS);

    const moviePage = mount(
        <MoviePage
          movie={movie}
          reviews={reviews}
          similarMovies={movies}
          onCardClick={() => {}}
        />
    );

    const tabs = moviePage.find(`a.movie-nav__link`);
    tabs.forEach((tab, i) => {
      tab.simulate(`click`);
      expect(moviePage.state().activeTabItem).toBe(tabsName[i]);
    });
  });

  it(`The correct screen is displayed in each state`, () => {

    const moviePage = mount(
        <MoviePage
          movie={movie}
          reviews={reviews}
          similarMovies={movies}
          onCardClick={() => {}}
        />
    );

    moviePage.setState({activeTabItem: TABS.OVERVIEW});
    expect(moviePage.find(MovieOverview)).toHaveLength(1);

    moviePage.setState({activeTabItem: TABS.DETAILS});
    expect(moviePage.find(MovieDetails)).toHaveLength(1);

    moviePage.setState({activeTabItem: TABS.REVIEWS});
    expect(moviePage.find(MovieReviews)).toHaveLength(1);

    moviePage.setState({activeTabItem: ``});
    expect(moviePage.find(MovieOverview)).toHaveLength(1);
  });

});
