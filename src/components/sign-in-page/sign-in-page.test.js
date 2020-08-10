import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SignInPage} from "./sign-in-page.jsx";
import {authInfoMock} from "../../mocks/test-data.js";
import NameSpace from "../../store/name-space.js";
import {Router} from 'react-router-dom';
import history from '../../history';


const mockStore = configureStore([]);

describe(`SignInPage`, () => {
  it(`Render SignInPage`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authInfo: authInfoMock,
        isAuthorizationError: false,
      },
    });
    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <SignInPage
                onInputDataChange={() => {}}
                onSignInClick={() => {}}
                isAuthorizationError={false}
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
