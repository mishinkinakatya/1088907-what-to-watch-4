import React from "react";
import renderer from "react-test-renderer";
import {MyListPage} from "./my-list-page.jsx";
import {moviesMock, countOfMaxCountOfVisibleMoviesMock, authInfoMock} from "../../mocks/test-data.js";
import {Router} from 'react-router-dom';
import history from '../../history';
import NameSpace from "../../store/name-space.js";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';


const mockStore = configureStore([]);

describe(`MyListPage`, () => {
  it(`Render MyListPag`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: moviesMock,
        favoriteMovies: moviesMock.filter((movie) => movie.isFavorite === true),
      },
      [NameSpace.CINEMA]: {
        maxCountOfVisibleMovies: countOfMaxCountOfVisibleMoviesMock,
      },
      [NameSpace.USER]: {
        authInfo: authInfoMock,
      },
    });
    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MyListPage
                loadFavotite={() => {}}
              />
            </Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
