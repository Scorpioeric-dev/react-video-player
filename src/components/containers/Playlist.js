import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import Nightmode from "../Nightmode";
import StyledPlaylist from "../styles/StyledPlaylist";

const Playlist = ({videos,active,nightModeCallback,NightMode}) => (
  <StyledPlaylist>
    <PlaylistHeader active={active} total={videos.length}/>
    <PlaylistItems videos={videos} active={active}/>
    <Nightmode nightModeCallback={nightModeCallback} Nightmode={Nightmode}/>
  </StyledPlaylist>
);

export default Playlist;
