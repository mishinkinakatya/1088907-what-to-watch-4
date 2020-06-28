import React, {PureComponent} from "react";
import PropTypes from "prop-types";
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
              onCardMouseOver={() => {
                this.setState({activeMovie: it});
              }} />
          );
        })}
      </div>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        poster: PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
        }).isRequired,
        bgPoster: PropTypes.shape({
          title: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.shape({
          score: PropTypes.number.isRequired,
          level: PropTypes.string.isRequired,
          count: PropTypes.number.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default MoviesList;
