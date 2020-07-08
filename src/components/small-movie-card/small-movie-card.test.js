import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

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
  preview: `Preview of Movie_title-1.`,
};

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
