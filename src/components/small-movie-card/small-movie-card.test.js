import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {movie} from "../../mocks/test-data.js";


describe(`SmallMovieCard`, () => {
  it(`Render SmallMovieCard`, () => {
    const tree = renderer
      .create(
          <SmallMovieCard
            movie={movie}
            onCardClick={() => {}}
            onCardHover={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
