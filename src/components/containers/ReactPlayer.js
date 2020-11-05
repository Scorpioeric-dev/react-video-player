import React, { useState, useEffect } from "react";
import Video from "../Video";
import { ThemeProvider } from "styled-components";
import Playlist from "../containers/Playlist";
import StyledReactPlayer from "../styles/StyledReactPlayer";

const theme = {
  bgcolor: "#353535",
  bgcolorItem: "#414141",
  bgcoloritemActive: "#405c63",
  bgcolorPlayed: "#526d4",
  border: "none",
  borderPlayed: "none",
  color: "#fff",
};
const themeLight = {
  bgcolor: "#fff",
  bgcolorItem: "#fff",
  bgcoloritemActive: "#80a7b1",
  bgcolorPlayed: "#526d4",
  border: "1px solid #353535",
  borderPlayed: "none",
  color: "#353535",
};

const ReactPlayer = (props) => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);

  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false,
  });
  
  const nightModeCallback = () => {};
  const endCallback = () => {};
  const progressCallback = () => {};

  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyledReactPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback}
          />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode}
          />
        </StyledReactPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default ReactPlayer;
