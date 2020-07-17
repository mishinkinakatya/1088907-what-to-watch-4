import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details.jsx";
import {movieMock} from "../../mocks/test-data.js";


describe(`MovieDetails`, () => {
  it(`Render MovieDetails`, () => {
    const tree = renderer
      .create(
          <MovieDetails
            movie={movieMock}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
