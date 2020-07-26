import React from "react";
import renderer from "react-test-renderer";
import {SimilarMoviesList} from "./similar-movies-list.jsx";
import {movieMock, moviesMock, activeGenreMock} from "../../mocks/test-data.js";


describe(`SimilarMoviesList`, () => {
  it(`Render SimilarMoviesList`, () => {
    const tree = renderer
      .create(
          <SimilarMoviesList
            movies={moviesMock}
            activeMovie={movieMock}
            activeGenre={activeGenreMock}
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
