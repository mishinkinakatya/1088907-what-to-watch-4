import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card.jsx";

const movie = {
  title: `Movie_title-1`,
  image: `Movie_image-1`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCardComponent`, () => {
  it(`Should title be pressed`, () => {
    const onTitleClick = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={movie}
          onTitleClick={onTitleClick}
          onCardMouseOver={() => {}}
        />
    );

    const title = smallMovieCard.find(`a.small-movie-card__link`);

    title.simulate(`click`);

    expect(onTitleClick.mock.calls.length).toBe(1);
  });

  it(`Movie gets into the handler on mouseover`, () => {
    const onCardMouseOver = jest.fn();

    const smallMovieCard = shallow(
        <SmallMovieCard
          movie={movie}
          onTitleClick={() => {}}
          onCardMouseOver={onCardMouseOver}
        />
    );

    const card = smallMovieCard.find(`.small-movie-card`);

    card.simulate(`mouseover`, movie);

    expect(onCardMouseOver.mock.calls.length).toBe(1);
  });
});
