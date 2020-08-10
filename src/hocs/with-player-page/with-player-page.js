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

      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);
      this.handlePlayPauseButtonClick = this.handlePlayPauseButtonClick.bind(this);
      this.renderVideoPlayer = this.renderVideoPlayer.bind(this);
      this.getPlayerTimeValue = this.getPlayerTimeValue.bind(this);
      this.calculateTogglerValue = this.calculateTogglerValue.bind(this);

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
      const {isPlaying} = this.state;
      const video = this._videoRef.current;

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

    renderVideoPlayer() {
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

    getPlayerTimeValue() {
      const {currentTimeValue, runTime} = this.state;
      const timeLeftInSec = runTime - currentTimeValue;

      const timeLeft = calculateDurationInHMS(timeLeftInSec);

      return `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`;
    }

    calculateTogglerValue() {
      const {currentTimeValue, runTime} = this.state;

      const togglerValue = currentTimeValue / runTime * 100;
      return togglerValue;
    }

    handlePlayPauseButtonClick() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying
      });
    }

    handleFullScreenButtonClick() {
      this._videoRef.current.requestFullscreen();
    }

    render() {
      const {isPlaying, currentTimeValue, runTime} = this.state;

      const playerTimeValue = this.getPlayerTimeValue();
      const togglerValueInPercents = `${this.calculateTogglerValue()}%`;

      return <Component
        {...this.props}
        videoRef={this._videoRef}
        isPlaying={isPlaying}
        currentTimeValue={currentTimeValue}
        runTime={runTime}
        renderVideoPlayer={this.renderVideoPlayer}
        onFullScreenButtonClick={this.handleFullScreenButtonClick}
        onPlayPauseButtonClick={this.handlePlayPauseButtonClick}
        playerTimeValue={playerTimeValue}
        togglerValueInPercents={togglerValueInPercents}
      />;
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
