import React from "react";
import renderer from "react-test-renderer";
import {SimilarMoviesList} from "./similar-movies-list.jsx";
import {movieMock, moviesMock} from "../../mocks/test-data.js";


describe(`SimilarMoviesList`, () => {
  it(`Render SimilarMoviesList`, () => {
    const tree = renderer
      .create(
          <SimilarMoviesList
            movies={moviesMock}
            activeMovie={movieMock}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
