import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "../containers/PlaylistItems";
import NightMode from "../Nightmode";

const Playlist = props => (
  <>
    <PlaylistHeader />
    <PlaylistItems />
    <NightMode/>
  </>
);

export default Playlist
