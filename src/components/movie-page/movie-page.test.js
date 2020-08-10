import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {MoviePage} from "./movie-page.jsx";
import {movieMock, moviesMock, reviewsMock, authInfoMock} from "../../mocks/test-data.js";
import NameSpace from "../../store/name-space.js";
import {SendingStatus} from "../../utils/const.js";
import {Router} from 'react-router-dom';
import history from '../../history';


const mockStore = configureStore([]);

describe(`MoviePage`, () => {
  it(`Render MoviePage`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: moviesMock,
        reviews: reviewsMock,
        sendFavotiteStatus: SendingStatus.NO_SENDING,
      },
      [NameSpace.USER]: {
        authInfo: authInfoMock,
      },
    });
    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <MoviePage
                activeMovie={movieMock}
                sendFavotiteStatus={SendingStatus.SUCCESS}
                loadReviews={() => {}}
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
