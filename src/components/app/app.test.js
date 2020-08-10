import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from "./app.jsx";
import {promoMovieMock, activeGenreMock, moviesMock, reviewsMock, countOfMaxCountOfVisibleMoviesMock, authInfoMock} from "../../mocks/test-data.js";
import NameSpace from "../../store/name-space.js";
import {SendingStatus, AuthorizationStatus} from "../../utils/const.js";


const mockStore = configureStore([]);

describe(`App`, () => {
  it(`Render App`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: moviesMock,
        promoMovie: promoMovieMock,
        reviews: reviewsMock,
        favoriteMovies: moviesMock.filter((movie) => movie.isFavorite === true),
        addReviewStatus: SendingStatus.NO_SENDING,
        sendFavotiteStatus: SendingStatus.NO_SENDING,
        textOfError: null,
      },
      [NameSpace.CINEMA]: {
        activeGenre: activeGenreMock,
        maxCountOfVisibleMovies: countOfMaxCountOfVisibleMoviesMock,
      },
      [NameSpace.USER]: {
        authInfo: authInfoMock,
        authorizationStatus: AuthorizationStatus.AUTH,
        isAuthorizationError: false,
      },
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
