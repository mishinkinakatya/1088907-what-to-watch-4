import React from "react";
import renderer from "react-test-renderer";
import withPlayer from "./with-player.js";
import history from '../../history';
import {Router} from 'react-router-dom';


const MockComponent = () => <video />;
const MockComponentWrapped = withPlayer(MockComponent);

describe(`withPlayer MockComponentWrapped`, () => {
  it(`Render withPlayer MockComponentWrapped`, () => {

    const tree = renderer
      .create(
          <Router history={history}>
            <MockComponentWrapped
            />
          </Router>, {
            createNodeMock() {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
