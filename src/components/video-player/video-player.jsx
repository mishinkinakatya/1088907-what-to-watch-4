import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isPlaying: props.isPlaying,
      isAudio: props.isAudio,
    };
  }

  render() {
    const {movie} = this.props;

    return (
      <div className="player">
        <video src={movie.preview} className="player__video" poster={movie.poster.image}></video>

        <button type="button" className="player__exit">Exit</button>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style="left: 30%;">Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isAudio: PropTypes.bool.isRequired,
};

export default VideoPlayer;
