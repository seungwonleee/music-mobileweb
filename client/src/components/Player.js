import React from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => {
  // 현재 재생 중 음악
  const nowPlaying = useSelector((state) => state.music.playNow.musicURL);

  return (
    <AudioPlayer
      autoPlay
      src={nowPlaying}
      onPlay={(e) => console.log('onPlay')}
      // other props here
    />
  );
};

export default Player;
