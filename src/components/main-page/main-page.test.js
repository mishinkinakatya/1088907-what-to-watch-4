import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MainPage} from "./main-page.jsx";
import {promoMovieMock, activeGenreMock, allGenresMock, moviesMock} from "../../mocks/test-data.js";


const mockStore = configureStore([]);

describe(`MainPage`, () => {
  it(`Render MainPage`, () => {
    const store = mockStore({
      promoMovie: promoMovieMock,
      activeGenre: activeGenreMock,
      allGenres: allGenresMock,
      movies: moviesMock,
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <MainPage
              promoMovie={promoMovieMock}
            />
          </Provider>
          , {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
