import React from "react";
import renderer from "react-test-renderer";
import withPlayer from "./with-player.js";
import history from '../../history';
import {Router} from 'react-router-dom';


const MockComponent = () => <div />;
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
              // return {
              //   videoRef: <video />
              // };
              return <video />;
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
