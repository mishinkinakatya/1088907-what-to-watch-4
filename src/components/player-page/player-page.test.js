import React from "react";
import renderer from "react-test-renderer";
import {PlayerPage} from "./player-page.jsx";
import {movieMock} from "../../mocks/test-data.js";


describe(`PlayerPage`, () => {
  it(`Render PlayerPage`, () => {
    const tree = renderer
      .create(
          <PlayerPage
            activeMovie={movieMock}
            isVideoPlayerPageOpen={true}
            isPlaying={true}
            renderVideoPlayer={() => {}}
            onPlayPauseButtonClick={() => {}}
            onFullScreenButtonClick={() => {}}
            onExitButtonClick={() => {}}
            currentTimeValue={224}
            runTime={324 * 60}
            playerTimeValue={`1:23:45`}
            togglerValueInPercents={`20%`}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
