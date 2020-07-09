import React, {PureComponent} from "react";
import {moviesTypes, onCardClickTypes} from "../../types/types.js";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeMovie: null};
  }

  render() {
    const {movies, onCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((it, i) => {
          return (
            <SmallMovieCard
              key={it.title + i}
              movie={it}
              onCardClick={onCardClick}
              onCardHover={() => {
                this.setState({activeMovie: it});
              }} />
          );
        })}
      </div>
    );
  }
}


MoviesList.propTypes = {
  movies: moviesTypes,
  onCardClick: onCardClickTypes,
};

export default MoviesList;
