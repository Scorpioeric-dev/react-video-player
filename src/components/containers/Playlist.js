import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import NightMode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = (props) => (
  <StyledPlaylist>
    <PlaylistHeader />
    <PlaylistItems />
    <NightMode />
  </StyledPlaylist>
);

export default Playlist;
