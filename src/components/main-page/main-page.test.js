import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import {movies, promoMovie} from "../../mocks/test-data.js";


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
