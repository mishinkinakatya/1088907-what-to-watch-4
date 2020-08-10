import React, {PureComponent, createRef} from "react";
import {stringRequiredTypes, boolRequiredTypes} from "../../types/types";


const TIMEOUT = 1000;

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
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
      clearTimeout(this._timeoutPlayHandler);
      this._timeoutPlayHandler = null;
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
      return <Component
        {...this.props}
        videoRef={this._videoRef}
      />;
    }
  }


  WithPlayer.propTypes = {
    preview: stringRequiredTypes,
    isPlaying: boolRequiredTypes,
  };


  return WithPlayer;
};


export default withPlayer;
