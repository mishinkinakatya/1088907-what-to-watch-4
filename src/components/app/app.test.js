import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          title={`Movie_title`}
          genre={`Movie_genre`}
          year={2013}
          movieTitles={[`Movie_title-1`, `Movie_title-2`, `Movie_title-3`]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
