import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";

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

describe(`MainPage`, () => {
  it(`Render MainPage`, () => {
    const tree = renderer
      .create(
          <MainPage
            promoMovie={promoMovie}
            movies={movies}
            onTitleClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
