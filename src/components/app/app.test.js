import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const promoMovie = {
  title: `Movie_title`,
  genre: `Movie_genre`,
  year: 2013,
};

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

describe(`App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
          <App
            promoMovie={promoMovie}
            movies={movies}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
