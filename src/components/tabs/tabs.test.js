import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from "./tabs.jsx";
import {TabsNameMock, movieMock, reviewsMock} from "../../mocks/test-data.js";


describe(`Tabs`, () => {
  it(`Render Tabs Overview`, () => {
    const tree = renderer
      .create(
          <Tabs
            activeMovie={movieMock}
            reviews={reviewsMock}
            activeItem={TabsNameMock.OVERVIEW}
            onActiveItemEvent={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Tabs Details`, () => {
    const tree = renderer
      .create(
          <Tabs
            activeMovie={movieMock}
            reviews={reviewsMock}
            activeItem={TabsNameMock.DETAILS}
            onActiveItemEvent={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Tabs Reviews`, () => {
    const tree = renderer
      .create(
          <Tabs
            activeMovie={movieMock}
            reviews={reviewsMock}
            activeItem={TabsNameMock.REVIEWS}
            onActiveItemEvent={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
