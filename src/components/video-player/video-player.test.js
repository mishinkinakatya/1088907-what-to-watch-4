import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const movie = {
  poster: {
    image: `Movie_image-1`,
    title: `Movie_title-1`,
  },
  preview: `Preview of Movie_title-1.`,
};

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
