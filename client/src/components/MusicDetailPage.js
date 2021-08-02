import React from 'react';
import { useParams } from 'react-router-dom';

const MusicDetailPage = () => {
  let { musicId } = useParams();
  return <div>{musicId}</div>;
};

export default MusicDetailPage;
