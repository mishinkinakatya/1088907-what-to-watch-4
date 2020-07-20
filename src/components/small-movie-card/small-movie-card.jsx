import React from "react";
import {movieTypes, onCardMouseEventTypes, onCardClickTypes, onCardHoverTypes, isPlayingTypes} from "../../types/types.js";
import VideoPlayer from "../video-player/video-player.jsx";
import withSmallMovieCard from "../../hocs/with-small-movie-card/with-small-movie-card.jsx";


const SmallMovieCard = (props) => {
  const {movie, onCardHover, isPlaying, onCardMouseEvent, onCardClick} = props;
  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={onCardClick}
      onMouseEnter={() => {
        onCardHover();
        onCardMouseEvent(true);
      }
      }
      onMouseLeave={() => {
        onCardHover({});
        onCardMouseEvent(false);
      }
      }
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          preview={movie.preview}
          poster={movie.poster}
          isPlaying={isPlaying}
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
};


SmallMovieCard.propTypes = {
  movie: movieTypes,
  isPlaying: isPlayingTypes,
  onCardMouseEvent: onCardMouseEventTypes,
  onCardClick: onCardClickTypes,
  onCardHover: onCardHoverTypes,
};

export default withSmallMovieCard(SmallMovieCard);
