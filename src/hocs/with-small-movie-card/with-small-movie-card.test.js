import React from "React";
import renderer from "react-test-renderer";
import withSmallMovieCard from "./with-small-movie-card.js";
import {movieMock} from "../../mocks/test-data.js";


const MockComponent = () => <div />;
const MockComponentWrapped = withSmallMovieCard(MockComponent);

describe(`withSmallMovieCard MockComponentWrapped`, () => {
  it(`Render withSmallMovieCard MockComponentWrapped`, () => {
    const tree = renderer
      .create((
        <MockComponentWrapped
          movie={movieMock}
          onCardClick={() => {}}
          isPlaying={true}
          onCardMouseEvent={() => {}}
        />), {
        createNodeMock() {
          return {};
        }
      }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
