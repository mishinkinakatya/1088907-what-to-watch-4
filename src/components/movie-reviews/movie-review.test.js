import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews.jsx";
import {reviews} from "../../mocks/test-data.js";


describe(`MovieReviews`, () => {
  it(`Render MovieReviews`, () => {
    const tree = renderer
      .create(
          <MovieReviews
            reviews={reviews}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
