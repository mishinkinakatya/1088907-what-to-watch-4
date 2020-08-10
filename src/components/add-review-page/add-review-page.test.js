import React from "react";
import {Provider} from 'react-redux';
import renderer from "react-test-renderer";
import configureStore from 'redux-mock-store';
import {AddReviewPage} from "./add-review-page.jsx";
import {movieMock, authInfoMock} from "../../mocks/test-data.js";
import {SendingStatus} from "../../utils/const.js";
import NameSpace from "../../store/name-space.js";
import history from '../../history';
import {Router} from 'react-router-dom';


const mockStore = configureStore([]);

describe(`AddReviewPage`, () => {
  it(`Render AddReviewPage`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authInfo: authInfoMock,
      },
    });
    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <AddReviewPage
              activeMovie={movieMock}
              isSubmitButtonDisabled={true}
              onRatingScoreChange={() => {}}
              onCommentChange={() => {}}
              onSubmitClick={() => {}}
              addReviewStatus={SendingStatus.SENDING}
              ratingScore={7.8}
            />
          </Provider>
        </Router>
        , {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
