import React from 'react';
import StyledPlaylistItem from './styles/StyledPlaylistItem';

const PlaylistItem = ({ video, active, played }) => (
  
  <StyledPlaylistItem active={active} played={played}>
    <div className="react-player__video-nr">{video.num}</div>
    <div className="react-player__video-name">{video.title}</div>
    <div className="react-player__video-time">{video.duration}</div>
  </StyledPlaylistItem>
);

export default PlaylistItem;