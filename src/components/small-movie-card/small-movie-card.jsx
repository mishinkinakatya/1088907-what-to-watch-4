import React, {PureComponent} from "react";
import {movieTypes, onCardClickTypes, onCardHoverTypes} from "../../types/types.js";
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
  movie: movieTypes,
  onCardClick: onCardClickTypes,
  onCardHover: onCardHoverTypes,
};

export default SmallMovieCard;
