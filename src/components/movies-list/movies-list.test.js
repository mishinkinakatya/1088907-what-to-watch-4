import React from "react";
import renderer from "react-test-renderer";
import {MoviesList} from "./movies-list.jsx";
import {moviesMock, countOfMaxCountOfVisibleMoviesMock} from "../../mocks/test-data.js";
import {Router} from 'react-router-dom';
import history from '../../history';


describe(`MovieList`, () => {
  it(`Render MovieList`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <MoviesList
              movies={moviesMock}
              maxCountOfVisibleMovies={countOfMaxCountOfVisibleMoviesMock}
            />
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
