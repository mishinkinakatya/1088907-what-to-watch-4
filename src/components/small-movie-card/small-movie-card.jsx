import React from "react";
import {movieTypes, onCardMouseEventTypes, onCardClickTypes, isPlayingTypes} from "../../types/types.js";
import VideoPlayer from "../video-player/video-player.jsx";
import withSmallMovieCard from "../../hocs/with-small-movie-card/with-small-movie-card.js";


const SmallMovieCard = (props) => {
  const {movie, isPlaying, onCardMouseEvent, onCardClick} = props;
  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={(evt) => {
        evt.preventDefault();
        onCardClick(movie);
      }}
      onMouseEnter={() => {
        onCardMouseEvent(true);
      }
      }
      onMouseLeave={() => {
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
};

export default withSmallMovieCard(SmallMovieCard);
