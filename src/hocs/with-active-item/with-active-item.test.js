import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item.js";
import {movieMock} from "../../mocks/test-data.js";


const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem MockComponentWrapped`, () => {
  it(`Render withActiveItem MockComponentWrapped`, () => {
    const tree = renderer
      .create((
        <MockComponentWrapped
          activeItem={movieMock}
          onActiveItemEvent={() => {}}
        />), {
        createNodeMock() {
          return {};
        }
      }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
