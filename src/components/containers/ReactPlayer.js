import React from "react";
import Video from "../Video";
import {ThemeProvider} from 'styled-components'
import Playlist from "../containers/Playlist";
import StyledReactPlayer from "../styles/StyledReactPlayer";

const theme = {
  bgcolor:"#353535",
  bgcolorItem:"#414141",
  bgcoloritemActive:"#405c63",
  bgcolorPlayed:"#526d4",
  border:"none",
  borderPlayed: "none",
  color:"#fff"
}
const themeLight = {
  bgcolor:"#fff",
  bgcolorItem:"#fff",
  bgcoloritemActive:"#80a7b1",
  bgcolorPlayed:"#526d4",
  border:"1px solid #353535",
  borderPlayed: "none",
  color:"#353535"
}

const ReactPlayer = (props) => {
  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
    <StyledReactPlayer>
    <Video />
    <Playlist />
    </StyledReactPlayer>
    </ThemeProvider>
    );
};

export default ReactPlayer;
