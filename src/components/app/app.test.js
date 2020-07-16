import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {movies, reviews, promoMovie, promoMovieReviews} from "../../mocks/test-data.js";


describe(`App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
          <App
            promoMovie={promoMovie}
            movies={movies}
            promoMovieReviews={promoMovieReviews}
            reviews={reviews}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
