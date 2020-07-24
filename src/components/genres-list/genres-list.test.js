import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list.jsx";
import {allGenresMock} from "../../mocks/test-data.js";


describe(`GenresList`, () => {
  it(`Render GenresList for each genre`, () => {
    allGenresMock.forEach((genre) => {
      const tree = renderer
        .create(
            <GenresList
              allGenres={allGenresMock}
              activeGenre={genre}
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
});
