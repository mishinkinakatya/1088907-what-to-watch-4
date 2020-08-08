import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import {movieRequiredTypes} from "../../types/types";
import {getActiveMovieById} from "../../store/reducer/cinema/selectors";
import {calculateDurationInHMS} from "../../utils/fn";


const withPlayerPage = (Component) => {
  class WithPlayerPage extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
      this._handlePlayPauseButtonClick = this._handlePlayPauseButtonClick.bind(this);
      this._renderVideoPlayer = this._renderVideoPlayer.bind(this);
      this._getPlayerTimeValue = this._getPlayerTimeValue.bind(this);
      this._calculateTogglerValue = this._calculateTogglerValue.bind(this);

      this.state = {
        isPlaying: true,
        currentTimeValue: 0,
        runTime: 0,
      };
    }

    componentDidMount() {
      const video = this._videoRef.current;
      video.play();

      video.onloadeddata = () => {
        this.setState({
          runTime: Math.floor(video.duration),
        });
      };
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.onloadeddata = null;
      video.ontimeupdate = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }

      video.ontimeupdate = () => {
        this.setState({
          currentTimeValue: Math.floor(video.currentTime),
        });
      };
    }

    render() {
      const {isPlaying, currentTimeValue, runTime} = this.state;

      const playerTimeValue = this._getPlayerTimeValue();
      const togglerValueInPercents = `${this._calculateTogglerValue()}%`;

      return <Component
        {...this.props}
        videoRef={this._videoRef}
        isPlaying={isPlaying}
        currentTimeValue={currentTimeValue}
        runTime={runTime}
        renderVideoPlayer={this._renderVideoPlayer}
        onFullScreenButtonClick={this._handleFullScreenButtonClick}
        onPlayPauseButtonClick={this._handlePlayPauseButtonClick}
        playerTimeValue={playerTimeValue}
        togglerValueInPercents={togglerValueInPercents}
      />;
    }

    _renderVideoPlayer() {
      const {activeMovie} = this.props;

      return (
        <video
          className="player__video"
          ref={this._videoRef}
          poster={activeMovie.posterImage}
          src={activeMovie.movieLink}
        />
      );
    }

    _getPlayerTimeValue() {
      const {currentTimeValue, runTime} = this.state;
      const timeLeftInSec = runTime - currentTimeValue;

      const timeLeft = calculateDurationInHMS(timeLeftInSec);

      return `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`;
    }

    _calculateTogglerValue() {
      const {currentTimeValue, runTime} = this.state;

      const togglerValue = currentTimeValue / runTime * 100;
      return togglerValue;
    }

    _handlePlayPauseButtonClick() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying
      });
    }

    _handleFullScreenButtonClick() {
      this._videoRef.current.requestFullscreen();
    }
  }

  WithPlayerPage.propTypes = {
    activeMovie: movieRequiredTypes,
  };


  const mapStateToProps = (state, ownProps) => {
    return {
      activeMovie: getActiveMovieById(state, ownProps),
    };
  };

  return connect(mapStateToProps, null)(WithPlayerPage);
};

export default withPlayerPage;
