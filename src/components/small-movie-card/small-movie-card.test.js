import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = {
  title: `Movie_title-1`,
  image: `Movie_image-1`,
};

describe(`SmallMovieCard`, () => {
  it(`Render SmallMovieCard`, () => {
    const tree = renderer
      .create(
          <SmallMovieCard
            movie={movie}
            onTitleClick={() => {}}
            onCardMouseOver={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
