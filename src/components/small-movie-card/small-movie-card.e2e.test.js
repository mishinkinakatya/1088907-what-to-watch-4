import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SmallMovieCard} from "./small-movie-card.jsx";
import {movieMock} from "../../mocks/test-data.js";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`SmallMovieCardComponent`, () => {
  it(`Should title be pressed`, () => {
    const onTitleClick = jest.fn();
    const onCardMouseEvent = jest.fn();

    const smallMovieCard = mount(
        <SmallMovieCard
          movie={movieMock}
          isPlaying={true}
          onCardClick={onTitleClick}
          onCardMouseEvent={onCardMouseEvent}
        />
    );

    const title = smallMovieCard.find(`a.small-movie-card__link`);

    title.simulate(`click`);

    expect(onTitleClick.mock.calls.length).toBe(1);
  });

  it(`Should card be pressed`, () => {
    const onCardClick = jest.fn();
    const onCardMouseEvent = jest.fn();

    const smallMovieCard = mount(
        <SmallMovieCard
          movie={movieMock}
          isPlaying={true}
          onCardClick={onCardClick}
          onCardMouseEvent={onCardMouseEvent}
        />
    );

    const title = smallMovieCard.find(`.small-movie-card`);

    title.simulate(`click`);

    expect(onCardClick.mock.calls.length).toBe(1);
  });

  // TODO: Проверять, что при клике по карточке передается movie
  // it(`Movie gets into the handler on onclick`, () => {
  //   const onCardClick = jest.fn();

  //   const smallMovieCard = shallow(
  //       <SmallMovieCard
  //         movie={movieMock}
  //         onCardClick={onCardClick}
  //       />
  //   );

  //   const card = smallMovieCard.find(`.small-movie-card`);

  //   card.simulate(`click`);

  //   expect(onCardClick.mock.calls.length).toBe(1);
  // });
});
