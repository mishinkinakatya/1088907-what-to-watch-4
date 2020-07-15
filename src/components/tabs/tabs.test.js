import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
import {TabsName} from "../../mocks/test-data.js";


describe(`Tabs`, () => {
  it(`Render Tabs Overview`, () => {
    const tree = renderer
      .create(
          <Tabs
            tabs={TabsName}
            activeTab={TabsName.OVERVIEW}
            onTabClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Tabs Details`, () => {
    const tree = renderer
      .create(
          <Tabs
            tabs={TabsName}
            activeTab={TabsName.DETAILS}
            onTabClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render Tabs Reviews`, () => {
    const tree = renderer
      .create(
          <Tabs
            tabs={TabsName}
            activeTab={TabsName.REVIEWS}
            onTabClick={() => {}}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
