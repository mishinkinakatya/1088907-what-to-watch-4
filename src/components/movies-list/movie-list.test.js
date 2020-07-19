import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";
import {moviesMock, countOfVisibleMoviesOnMainPageMock} from "../../mocks/test-data.js";


describe(`MovieList`, () => {
  it(`Render MovieList`, () => {
    const tree = renderer
      .create(
          <MoviesList
            movies={moviesMock}
            maxCountOfVisibleMovies={countOfVisibleMoviesOnMainPageMock}
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
