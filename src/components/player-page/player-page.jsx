import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {movieTypes, onExitButtonClickTypes, onFullScreenButtonClickTypes, renderVideoPlayerTypes, isVideoPlayerPageOpenTypes, isPlayingTypes, onPlayPauseButtonClickTypes, currentTimeValueTypes, runTimeTypes, playerTimeValueTypes, togglerValueInPercentsTypes} from "../../types/types";
import {ActionCreator} from "../../store/actions";
import withPlayerPage from "../../hocs/with-player-page/with-player-page.js";


class PlayerPage extends PureComponent {
  constructor(props) {
    super(props);

    this._renderPlayButton = this._renderPlayButton.bind(this);
    this._renderPauseButton = this._renderPauseButton.bind(this);
  }

  render() {
    const {renderVideoPlayer} = this.props;

    return (
      <div className="player" >
        {renderVideoPlayer()}
        {this._renderVideoPlayerButtons()}
      </div>
    );
  }

  _renderVideoPlayerButtons() {
    const {activeMovie, onExitButtonClick, onFullScreenButtonClick, isPlaying, currentTimeValue, runTime, playerTimeValue, togglerValueInPercents} = this.props;

    return (
      <React.Fragment>
        <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={currentTimeValue} max={runTime}></progress>
              <div className="player__toggler" style={{left: togglerValueInPercents}}>Toggler</div>
            </div>
            <div className="player__time-value">{playerTimeValue}</div>
          </div>

          <div className="player__controls-row">
            {isPlaying ? this._renderPauseButton() : this._renderPlayButton()}

            <div className="player__name">{activeMovie.title}</div>

            <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  _renderPlayButton() {
    const {onPlayPauseButtonClick} = this.props;

    return (
      <button type="button" className="player__play" onClick={onPlayPauseButtonClick}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
    );
  }

  _renderPauseButton() {
    const {onPlayPauseButtonClick} = this.props;
    return (
      <button type="button" className="player__play" onClick={onPlayPauseButtonClick}>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </button>
    );
  }
}

PlayerPage.propTypes = {
  activeMovie: movieTypes,
  isVideoPlayerPageOpen: isVideoPlayerPageOpenTypes,
  isPlaying: isPlayingTypes,
  renderVideoPlayer: renderVideoPlayerTypes,
  onPlayPauseButtonClick: onPlayPauseButtonClickTypes,
  onFullScreenButtonClick: onFullScreenButtonClickTypes,
  onExitButtonClick: onExitButtonClickTypes,
  currentTimeValue: currentTimeValueTypes,
  runTime: runTimeTypes,
  playerTimeValue: playerTimeValueTypes,
  togglerValueInPercents: togglerValueInPercentsTypes,
};


const mapStateToProps = (state) => {
  return {
    activeMovie: state.activeMovie || state.promoMovie,
    isVideoPlayerPageOpen: state.isVideoPlayerPageOpen,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onExitButtonClick() {
    dispatch(ActionCreator.actionCloseVideoPlayerPage());
  },
});


export {PlayerPage};
export default connect(mapStateToProps, mapDispatchToProps)(withPlayerPage(PlayerPage));
