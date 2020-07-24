import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from "./app.jsx";
import {movieMock, promoMovieMock, activeGenreMock, allGenresMock, moviesMock, promoMovieReviewsMock, reviewsMock, countOfVisibleMoviesOnMainPageMock} from "../../mocks/test-data.js";


const mockStore = configureStore([]);

describe(`App`, () => {
  it(`Render App`, () => {
    const store = mockStore({
      activeMovie: movieMock,
      promoMovie: promoMovieMock,
      activeGenre: activeGenreMock,
      allGenres: allGenresMock,
      movie: movieMock,
      movies: moviesMock,
      promoMovieReviews: promoMovieReviewsMock,
      reviews: reviewsMock,
      maxCountOfVisibleMovies: countOfVisibleMoviesOnMainPageMock,
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>,
          {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
