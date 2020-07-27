import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item.js";
import {movieMock} from "../../mocks/test-data.js";
import {moviesMock, reviewsMock, TabsNameMock} from "../../mocks/test-data.js";


Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

describe(`withActiveItem MockComponentWrapped`, () => {
  it(`The correct screen is displayed in each state`, () => {

    const moviePage = shallow(
        <MockComponentWrapped
          movie={movieMock}
          reviews={reviewsMock}
          similarMovies={moviesMock}
          onCardClick={() => {}}
        />
    );

    expect(moviePage.state().activeItem).toBe(null);

    moviePage.props().onActiveItemEvent(TabsNameMock.OVERVIEW);
    expect(moviePage.state().activeItem).toBe(TabsNameMock.OVERVIEW);
    moviePage.props().onActiveItemEvent(TabsNameMock.DETAILS);
    expect(moviePage.state().activeItem).toBe(TabsNameMock.DETAILS);
    moviePage.props().onActiveItemEvent(TabsNameMock.REVIEWS);
    expect(moviePage.state().activeItem).toBe(TabsNameMock.REVIEWS);
  });
});
