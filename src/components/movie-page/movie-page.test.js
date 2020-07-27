import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MoviePage} from "./movie-page.jsx";
import {movieMock, moviesMock, activeGenreMock, promoMovieReviewsMock, reviewsMock} from "../../mocks/test-data.js";


const mockStore = configureStore([]);

describe(`MoviePage`, () => {
  it(`Render MoviePage`, () => {
    const store = mockStore({
      activeMovie: movieMock,
      movies: moviesMock,
      activeGenre: activeGenreMock,
      promoMovieReviews: promoMovieReviewsMock,
      reviews: reviewsMock,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <MoviePage
              activeMovie={movieMock}
              onPlayButtonClick={() => {}}
            />
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
