import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {movie, movies, reviews} from "../../mocks/test-data.js";


describe(`MoviePage`, () => {
  it(`Render MoviePage`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movie}
            reviews={reviews}
            similarMovies={movies}
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
