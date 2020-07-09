import React, {PureComponent, createRef} from "react";
import {posterTypes, previewTypes, isPlayingTypes} from "../../types/types";


const TIMEOUT = 1000;

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timeoutPlayHandler = null;
  }

  componentDidMount() {
    const {preview} = this.props;
    const video = this._videoRef.current;

    video.src = preview;
    video.muted = true;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.muted = false;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._timeoutPlayHandler = setTimeout(() => video.play(), TIMEOUT);
    } else {
      if (this._timeoutPlayHandler) {
        clearTimeout(this._timeoutPlayHandler);
        this._timeoutPlayHandler = null;
      }
      video.load();
    }
  }

  render() {
    const {poster} = this.props;
    return (
      <video
        className="player__video"
        ref={this._videoRef}
        poster={poster.image}
      />
    );
  }
}


VideoPlayer.propTypes = {
  poster: posterTypes,
  preview: previewTypes,
  isPlaying: isPlayingTypes,
};

export default VideoPlayer;
