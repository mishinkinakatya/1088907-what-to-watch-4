import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handleCardClick = this._handleCardClick.bind(this);
  }

  render() {
    const {movie, onCardHover} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card"
        onClick={this._handleCardClick}
        onMouseEnter={() => {
          onCardHover();
          this.setState({
            isPlaying: true,
          });
        }
        }
        onMouseLeave={() => {
          onCardHover({});
          this.setState({
            isPlaying: false,
          });
        }
        }
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            preview={movie.preview}
            poster={movie.poster}
            isPlaying={this.state.isPlaying}
          />
          <img
            src={movie.bgPoster.image}
            alt={movie.bgPoster.title}
            width="280"
            height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{movie.bgPoster.title}</a>
        </h3>
      </article >
    );
  }

  _handleCardClick(evt) {
    const {movie, onCardClick} = this.props;
    evt.preventDefault();
    onCardClick(movie);
  }

}


SmallMovieCard.propTypes = {
  movie: PropTypes.shape({
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
      count: PropTypes.number.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starrings: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default SmallMovieCard;
