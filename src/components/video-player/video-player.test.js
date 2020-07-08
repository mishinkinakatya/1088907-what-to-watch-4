import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";
import {movie} from "../../mocks/test-data.js";


describe(`VideoPlayer`, () => {
  it(`Render preview VideoPlayer`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            preview={movie.preview}
            poster={movie.poster}
            isPlaying={true}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
