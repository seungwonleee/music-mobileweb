import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GridCard from './GridCard';
import Grid from '@material-ui/core/Grid';

import { LOAD_MUSIC_LIST_REQUEST } from '../reducers/music';

const LandingPage = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.music.musicList);
  console.log(datas);
  useEffect(() => {
    dispatch({
      type: LOAD_MUSIC_LIST_REQUEST,
    });
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <Grid container spacing={2}>
        {datas &&
          datas.map((data, index) => <GridCard key={data.title} data={data} />)}
      </Grid>
    </div>
  );
};

export default LandingPage;
