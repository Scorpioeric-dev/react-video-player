import React from "react";
import Video from "../Video";
import Playlist from "../containers/Playlist";
import StyledReactPlayer from "../styles/StyledReactPlayer";

const ReactPlayer = (props) => {
  return (
    <StyledReactPlayer>
      <Video />
      <Playlist />
    </StyledReactPlayer>
  );
};

export default ReactPlayer;
