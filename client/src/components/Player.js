import React, { useCallback, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = () => {
  const [currentTime, setCurrentTime] = useState(0);

  //TODO 재생 시간 가져오기
  const getCurrentTime = useCallback(
    (e) => {
      let time = e.target.currentTime;

      setCurrentTime(time);
    },
    [currentTime]
  );

  return (
    <AudioPlayer
      autoPlay
      src="https://music-mobileweb.s3.ap-northeast-2.amazonaws.com/1.m4a"
      onPlay={(e) => console.log('onPlay')}
      // other props here
      onPlaying={(e) => {}}
    />
  );
};

export default Player;
