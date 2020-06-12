import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

it(`Render SmallMovieCard`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          title={`Movie_title-1`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
