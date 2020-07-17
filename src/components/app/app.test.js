import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";
import {activeGenreMock, movieMock, promoMovieReviewsMock, allGenresMock, moviesMock, promoMovieMock, reviewsMock, countMoviesOfActiveGenreMock, countOfVisibleMoviesOnMainPageMock} from "../../mocks/test-data.js";


const mockStore = configureStore([]);

describe(`App`, () => {
  it(`Render App`, () => {
    const store = mockStore({
      activeGenre: activeGenreMock,
      allGenres: allGenresMock,
      movie: movieMock,
      movies: moviesMock,
      moviesOfActiveGenre: moviesMock,
      promoMovie: promoMovieMock,
      promoMovieReviews: promoMovieReviewsMock,
      reviews: reviewsMock,
      countMoviesOfActiveGenre: countMoviesOfActiveGenreMock,
      countOfVisibleMoviesOnMainPage: countOfVisibleMoviesOnMainPageMock,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
