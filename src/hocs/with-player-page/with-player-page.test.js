import React from "react";
import renderer from "react-test-renderer";
import withPlayerPage from "./with-player-page.js";
import NameSpace from "../../store/name-space.js";
import {authInfoMock, moviesMock, movieMock} from "../../mocks/test-data.js";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SendingStatus} from "../../utils/const.js";
import history from '../../history';
import {Router} from 'react-router-dom';


const mockStore = configureStore([]);

const MockComponent = () => <video />;
const MockComponentWrapped = withPlayerPage(MockComponent);

describe(`withPlayerPage MockComponentWrapped`, () => {
  it(`Render withPlayerPage MockComponentWrapped`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        movies: moviesMock,
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
                // videoRef={videoRefMock}
                activeMovie={movieMock}
                isPlaying={true}
                currentTimeValue={20}
                runTime={100}
                renderVideoPlayer={() => {}}
                onFullScreenButtonClick={() => {}}
                onPlayPauseButtonClick={() => {}}
                playerTimeValue={`00:20:45`}
                togglerValueInPercents={20}
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
