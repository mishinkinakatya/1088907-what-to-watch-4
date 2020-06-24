import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeMovie: null};
  }

  render() {
    const {movies, onTitleClick} = this.props;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {movies.map((it, i) => {
            return (
              <SmallMovieCard
                key={it + i}
                movie={it}
                onTitleClick={onTitleClick}
                onCardMouseOver={() => {
                  this.setState({activeMovie: it});
                }} />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
  ).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default MoviesList;
