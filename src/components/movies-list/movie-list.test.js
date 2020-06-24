import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const movies = [
  {
    image: `Movie_image-1`,
    title: `Movie_title-1`,
  },
  {
    image: `Movie_image-2`,
    title: `Movie_title-2`,
  },
  {
    image: `Movie_image-3`,
    title: `Movie_title-3`,
  }
];

describe(`MovieList`, () => {
  it(`Render MovieList`, () => {
    const tree = renderer
      .create(
          <MoviesList
            movies={movies}
            onTitleClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
