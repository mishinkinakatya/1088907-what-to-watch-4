import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview.jsx";
import {movieMock} from "../../mocks/test-data.js";


describe(`MovieOverview`, () => {
  it(`Render MovieOverview`, () => {
    const tree = renderer
      .create(
          <MovieOverview
            movie={movieMock}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
