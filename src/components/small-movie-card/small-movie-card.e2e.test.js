import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCardComponent`, () => {
  it(`Should title be pressed`, () => {
    const onTitleClick = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          title={`Movie_title-1`}
          onTitleClick={onTitleClick}
        />
    );

    const title = smallMovieCard.find(`a.small-movie-card__link`);

    title.simulate(`click`);

    expect(onTitleClick.mock.calls.length).toBe(1);
  });
});
