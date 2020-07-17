import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";
import {moviesMock, promoMovieMock, allGenresMock, activeGenreMock, countMoviesOfActiveGenreMock, countOfVisibleMoviesOnMainPageMock} from "../../mocks/test-data.js";


describe(`MainPage`, () => {
  it(`Render MainPage`, () => {
    const tree = renderer
      .create(
          <MainPage
            activeGenre={activeGenreMock}
            allGenres={allGenresMock}
            movies={moviesMock}
            countMoviesOfActiveGenre={countMoviesOfActiveGenreMock}
            countOfVisibleMoviesOnMainPage={countOfVisibleMoviesOnMainPageMock}
            promoMovie={promoMovieMock}
            onCardClick={() => {}}
            onGenreClick={() => {}}
            onShowMoreButtonClick={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
