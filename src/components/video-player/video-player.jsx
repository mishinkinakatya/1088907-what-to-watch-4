import React from "react";
import {stringRequiredTypes, objectRequiredTypes} from "../../types/types";
import withPlayer from "../../hocs/with-player/with-player.js";


const VideoPlayer = (props) => {
  const {poster, videoRef} = props;

  return (
    <video
      className="player__video"
      ref={videoRef}
      poster={poster}
    />
  );
};


VideoPlayer.propTypes = {
  poster: stringRequiredTypes,
  videoRef: objectRequiredTypes,
};

export default withPlayer(VideoPlayer);
