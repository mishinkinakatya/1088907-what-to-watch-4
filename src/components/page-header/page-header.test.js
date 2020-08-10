import React from "react";
import renderer from "react-test-renderer";
import PageHeader from "./page-header.jsx";
import history from '../../history';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from "../../store/name-space.js";
import {authInfoMock} from "../../mocks/test-data.js";
import {AuthorizationStatus, AppPages} from "../../utils/const.js";


const mockStore = configureStore([]);

describe(`PageHeader`, () => {
  it(`Render PageHeader`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authInfo: authInfoMock,
        authorizationStatus: AuthorizationStatus.AUTH,
      },
    });

    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <PageHeader
              activePage={AppPages.MY_LIST_PAGE}
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
