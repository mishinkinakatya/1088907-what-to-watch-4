import React from "react";
import {Provider} from 'react-redux';
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import MovieButtons from "./movie-buttons.jsx";
import {authInfoMock, movieMock} from "../../mocks/test-data.js";
import NameSpace from "../../store/name-space.js";
import history from '../../history';
import {Router} from 'react-router-dom';
import {SendingStatus} from "../../utils/const.js";


const mockStore = configureStore([]);

describe(`MovieButtons`, () => {
  it(`Render MovieButtons`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {sendFavotiteStatus: SendingStatus.NO_SENDING,
      },
      [NameSpace.USER]: {
        authInfo: authInfoMock,
      },
    });
    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <MovieButtons
              movie={movieMock}
              isFavorite={true}
            />
          </Provider>
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
