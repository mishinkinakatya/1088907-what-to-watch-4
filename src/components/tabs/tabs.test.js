import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import {TabsNameMock} from "../../mocks/test-data.js";


describe(`Tabs`, () => {
  it(`Render Tabs Overview`, () => {
    const tree = renderer
      .create(
          <Tabs
            tabs={TabsNameMock}
            activeTab={TabsNameMock.OVERVIEW}
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
            tabs={TabsNameMock}
            activeTab={TabsNameMock.DETAILS}
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
            tabs={TabsNameMock}
            activeTab={TabsNameMock.REVIEWS}
            onActiveItemEvent={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
