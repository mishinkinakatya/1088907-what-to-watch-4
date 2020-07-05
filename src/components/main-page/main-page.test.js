import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";

const promoMovie = {
  title: `Movie_title`,
  genre: `Genre`,
  year: 5555,
  poster: {
    image: `Movie_image`,
    title: `Movie_title`,
  },
  bgPoster: {
    image: `Movie_image`,
    title: `Movie_title`,
  },
  rating: {
    score: 5.5,
    count: 555
  },
  description: `Description of Movie_title.`,
  director: `Director of Movie_title.`,
  starring: `Starring of Movie_title.`,
  preview: `Preview of Movie_title.`,
};

const movies = [
  {
    title: `Movie_title-1`,
    genre: `Genre-1`,
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
    starring: `Starring of Movie_title-1.`,
  },
  {
    title: `Movie_title-2`,
    genre: `Genre-2`,
    year: 2222,
    poster: {
      image: `Movie_image-2`,
      title: `Movie_title-2`,
    },
    bgPoster: {
      image: `Movie_image-2`,
      title: `Movie_title-2`,
    },
    rating: {
      score: 2.2,
      count: 222
    },
    description: `Description of Movie_title-2.`,
    director: `Director of Movie_title-2.`,
    starring: `Starring of Movie_title-2.`,
  },
  {
    title: `Movie_title-3`,
    genre: `Genre-3`,
    year: 3333,
    poster: {
      image: `Movie_image-3`,
      title: `Movie_title-3`,
    },
    bgPoster: {
      image: `Movie_image-3`,
      title: `Movie_title-3`,
    },
    rating: {
      score: 3.3,
      count: 333
    },
    description: `Description of Movie_title-3.`,
    director: `Director of Movie_title-3.`,
    starring: `Starring of Movie_title-3.`,
  }
];

describe(`MainPage`, () => {
  it(`Render MainPage`, () => {
    const tree = renderer
      .create(
          <MainPage
            promoMovie={promoMovie}
            movies={movies}
            onCardClick={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
