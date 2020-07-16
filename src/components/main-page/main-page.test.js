import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import {moviesMock, promoMovieMock, allGenresMock, activeGenreMock} from "../../mocks/test-data.js";


describe(`MainPage`, () => {
  it(`Render MainPage`, () => {
    const tree = renderer
      .create(
          <MainPage
            promoMovie={promoMovieMock}
            movies={moviesMock}
            allGenres={allGenresMock}
            activeGenre={activeGenreMock}
            onCardClick={() => {}}
            onGenreClick={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
