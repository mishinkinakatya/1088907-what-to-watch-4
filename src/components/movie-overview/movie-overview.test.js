import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const movie = {
  title: `Movie_title-1`,
  genre: `Genre`,
  year: 1111,
  poster: {
    image: `Movie_image-1`,
    title: `Movie_title-1`,
  },
  bgPoster: {
    image: `Movie_image-1`,
    title: `Movie_title-1`,
  },
  rating: {
    score: 1.1,
    count: 111
  },
  description: `Description of Movie_title-1.`,
  director: `Director of Movie_title-1.`,
  starrings: `Starring of Movie_title-1.`,
};

describe(`MoviePage`, () => {
  it(`Render MoviePage`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movie}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
