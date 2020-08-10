import React from "react";
import {Provider} from 'react-redux';
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import ErrorPage from "./error-page.jsx";
import {authInfoMock} from "../../mocks/test-data.js";
import NameSpace from "../../store/name-space.js";
import history from '../../history';
import {Router} from 'react-router-dom';


const mockStore = configureStore([]);

describe(`ErrorPage`, () => {
  it(`Render ErrorPage`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authInfo: authInfoMock,
      },
    });
    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <ErrorPage />
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
