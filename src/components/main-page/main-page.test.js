import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page.jsx";

it(`Render MainPage`, () => {
  const tree = renderer
    .create(
        <MainPage
          title={`Movie_title`}
          genre={`Movie_genre`}
          year={2013}
          movieTitles={[`Movie_title-1`, `Movie_title-2`, `Movie_title-3`]}
          onTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
