import React from "react";
import {posterTypes, videoRefTypes} from "../../types/types";
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
  poster: posterTypes,
  videoRef: videoRefTypes,
};

export default withPlayer(VideoPlayer);
