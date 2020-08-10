import React from "react";
import renderer from "react-test-renderer";
import PageFooter from "./page-footer.jsx";
import history from '../../history';
import {Router} from 'react-router-dom';


describe(`PageFooter`, () => {
  it(`Render PageFooter`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <PageFooter />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
