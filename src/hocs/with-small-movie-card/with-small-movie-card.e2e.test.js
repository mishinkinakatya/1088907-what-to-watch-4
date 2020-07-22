import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {movieMock} from "../../mocks/test-data.js";
import withSmallMovieCard from "./with-small-movie-card.js";


Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div />;
const MockComponentWrapped = withSmallMovieCard(MockComponent);

describe(`MockComponentWrappedComponent`, () => {
  it(`Should videoplayer be in state play and pause`, () => {

    const smallMovieCard = shallow(
        <MockComponentWrapped
          movie={movieMock}
          onCardClick={() => {}}
          onCardMouseEvent={() => {}}
        />
    );

    expect(smallMovieCard.state().isPlaying).toBe(false);

    smallMovieCard.props().onCardMouseEvent(true);
    expect(smallMovieCard.props().isPlaying).toBe(true);
    smallMovieCard.props().onCardMouseEvent(false);
    expect(smallMovieCard.props().isPlaying).toBe(false);
  });

});
