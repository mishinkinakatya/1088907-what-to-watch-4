import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";
import {movieMock, moviesMock, reviewsMock} from "../../mocks/test-data.js";


describe(`MoviePage`, () => {
  it(`Render MoviePage`, () => {
    const tree = renderer
      .create(
          <MoviePage
            movie={movieMock}
            reviews={reviewsMock}
            similarMovies={moviesMock}
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
