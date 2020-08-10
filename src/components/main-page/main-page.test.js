import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MainPage} from "./main-page.jsx";
import {promoMovieMock, activeGenreMock, moviesMock, authInfoMock, countOfMaxCountOfVisibleMoviesMock} from "../../mocks/test-data.js";
import NameSpace from "../../store/name-space.js";
import {SendingStatus} from "../../utils/const.js";
import {Router} from 'react-router-dom';
import history from '../../history';


const mockStore = configureStore([]);

describe(`MainPage`, () => {
  it(`Render MainPage`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: moviesMock,
        promoMovie: promoMovieMock,
        favoriteMovies: moviesMock.filter((movie) => movie.isFavorite === true),
        sendFavotiteStatus: SendingStatus.NO_SENDING,
      },
      [NameSpace.CINEMA]: {
        activeGenre: activeGenreMock,
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
              <MainPage
                promoMovie={promoMovieMock}
                sendFavotiteStatus={SendingStatus.SUCCESS}
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
