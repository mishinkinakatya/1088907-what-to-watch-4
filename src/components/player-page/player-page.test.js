import React from "react";
import renderer from "react-test-renderer";
import {PlayerPage} from "./player-page.jsx";
import {movieMock} from "../../mocks/test-data.js";
import {Router} from 'react-router-dom';
import history from '../../history';


describe(`PlayerPage`, () => {
  it(`Render PlayerPage`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PlayerPage
              activeMovie={movieMock}
              isPlaying={true}
              renderVideoPlayer={() => {}}
              onPlayPauseButtonClick={() => {}}
              onFullScreenButtonClick={() => {}}
              currentTimeValue={224}
              runTime={324 * 60}
              playerTimeValue={`1:23:45`}
              togglerValueInPercents={`20%`}
            />
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
