import React from "react";
import renderer from "react-test-renderer";
import withAddReview from "./with-add-review.js";
import NameSpace from "../../store/name-space.js";
import {authInfoMock} from "../../mocks/test-data.js";
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SendingStatus} from "../../utils/const.js";


const mockStore = configureStore([]);

const MockComponent = () => <div />;
const MockComponentWrapped = withAddReview(MockComponent);

describe(`withAddReview MockComponentWrapped`, () => {
  it(`Render withAddReview MockComponentWrapped`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        addReviewStatus: SendingStatus.NO_SENDING,
      },
      [NameSpace.USER]: {
        authInfo: authInfoMock,
      },
    });
    const tree = renderer
      .create(
          <Provider store={store}>
            <MockComponentWrapped
              ratingScore={7.8}
              isSubmitButtonDisabled={() => {}}
              onRatingScoreChange={() => {}}
              onCommentChange={() => {}}
              onSubmitClick={() => {}}
            />
          </Provider>, {
            createNodeMock() {
              return {};
            }
          }
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
