import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";
import {movie} from "../../mocks/test-data.js";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCardComponent`, () => {
  it(`Should title be pressed`, () => {
    const onTitleClick = jest.fn();

    const smallMovieCard = mount(
        <SmallMovieCard
          movie={movie}
          onCardClick={onTitleClick}
          onCardHover={() => {}}
        />
    );

    const title = smallMovieCard.find(`a.small-movie-card__link`);

    title.simulate(`click`);

    expect(onTitleClick.mock.calls.length).toBe(1);
  });

  it(`Should card be pressed`, () => {
    const onCardClick = jest.fn();

    const smallMovieCard = mount(
        <SmallMovieCard
          movie={movie}
          onCardClick={onCardClick}
          onCardHover={() => {}}
        />
    );

    const title = smallMovieCard.find(`.small-movie-card`);

    title.simulate(`click`);

    expect(onCardClick.mock.calls.length).toBe(1);
  });

  it(`Movie gets into the handler on mouseenter`, () => {
    const onCardHover = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={movie}
          onCardClick={() => {}}
          onCardHover={onCardHover}
        />
    );

    const card = smallMovieCard.find(`.small-movie-card`);

    card.simulate(`mouseenter`, movie);

    expect(onCardHover.mock.calls.length).toBe(1);
  });

  it(`Should videoplayer be in state play and pause`, () => {
    const onCardHover = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={movie}
          onCardClick={() => {}}
          onCardHover={onCardHover}
        />
    );

    const card = smallMovieCard.find(`.small-movie-card`);

    card.simulate(`mouseenter`);

    expect(onCardHover.mock.calls.length).toBe(1);
    expect(smallMovieCard.state().isPlaying).toBe(true);

    card.simulate(`mouseleave`);

    expect(onCardHover.mock.calls.length).toBe(2);
    expect(smallMovieCard.state().isPlaying).toBe(false);
  });
});
