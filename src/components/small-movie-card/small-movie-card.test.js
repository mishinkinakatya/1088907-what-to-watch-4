import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {movieMock} from "../../mocks/test-data.js";
import {Router} from 'react-router-dom';
import history from '../../history';


describe(`SmallMovieCard`, () => {
  it(`Render SmallMovieCard`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <SmallMovieCard
              movie={movieMock}
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
