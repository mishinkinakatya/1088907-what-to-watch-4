import React from "react";
import renderer from "react-test-renderer";
import {ShowMoreButton} from "./show-more-button.jsx";
import {countOfVisibleMoviesOnMainPageMock, moviesMock} from "../../mocks/test-data.js";
import {funcRequiredTypes} from "../../types/types.js";


describe(`ShowMoreButton`, () => {
  it(`Render ShowMoreButton`, () => {
    const tree = renderer
      .create(
          <ShowMoreButton
            maxCountOfVisibleMovies={countOfVisibleMoviesOnMainPageMock}
            onShowMoreButtonClick={funcRequiredTypes}
            movies={moviesMock}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
