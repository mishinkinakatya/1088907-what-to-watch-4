import React from "react";
import renderer from "react-test-renderer";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import PrivateRoute from "./private-route.jsx";
import NameSpace from "../../store/name-space.js";
import {AuthorizationStatus, AppRoute} from "../../utils/const.js";
import {Router} from 'react-router-dom';
import history from '../../history';


const mockStore = configureStore([]);

describe(`PrivateRoute`, () => {
  it(`Render PrivateRoute`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <PrivateRoute
                path={AppRoute.MY_LIST_PAGE}
                exact={true}
                render={() => {}}
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
