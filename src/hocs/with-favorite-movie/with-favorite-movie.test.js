import React from "react";
import renderer from "react-test-renderer";
import withFavoriteMovie from "./with-favorite-movie.jsx";
import NameSpace from "../../store/name-space.js";
import {authInfoMock, movieMock} from "../../mocks/test-data.js";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SendingStatus} from "../../utils/const.js";
import history from '../../history';
import {Router} from 'react-router-dom';


const mockStore = configureStore([]);

const MockComponent = () => <div />;
const MockComponentWrapped = withFavoriteMovie(MockComponent);

describe(`withFavoriteMovie MockComponentWrapped`, () => {
  it(`Render withFavoriteMovie MockComponentWrapped`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
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
              <MockComponentWrapped
                movie={movieMock}
                onMyListButtonClick={() => {}}
              />
            </Provider>
          </Router>, {
            createNodeMock() {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
