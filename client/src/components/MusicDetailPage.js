import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PLAY_MUSIC } from '../reducers/music';
// Material UI Imports
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
    width: '90%',
    background: '#424242',
    color: '#FFFFFF',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
    color: '#FFFFFF',
  },
}));

const Table = styled.table`
  border: 1px solid #000000;
  border-radius: 5px;
  width: 90%;
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid #636159;
`;

const CardContainer = styled.div`
  height: 100vh;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MusicDetailPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  let { musicId } = useParams();
  const musicList = useSelector((state) => state.music.musicList);

  const result = musicList.find((music) => music.id === Number(musicId));
  // console.log(result);
  const filterdList = musicList.filter((music) => music.id !== Number(musicId));
  // console.log(filterdList);

  const handlePlayMusic = useCallback((event) => {
    const id = Number(event.currentTarget.name);
    const url = event.currentTarget.dataset.url;
    dispatch({
      type: PLAY_MUSIC,
      data: {
        musicId: id,
        musicURL: url,
      },
    });
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <img src={result.album} alt="ablum" style={{ width: '60%' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Table>
          <tr>
            <Td>제목</Td>
            <Td>{result.title}</Td>
          </tr>
          <tr>
            <Td>저자</Td>
            <Td>{result.author}</Td>
          </tr>
          <tr>
            <Td>작곡가</Td>
            <Td>{result.composor}</Td>
          </tr>

          <tr>
            <Td>장르</Td>
            <Td>{result.genre}</Td>
          </tr>
          <tr>
            <Td>발행된 해</Td>
            <Td>{result.releaseDate}</Td>
          </tr>
        </Table>
      </div>

      <CardContainer>
        {filterdList.map((music) => (
          <CardWrapper key={music.title}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  {/* <Typography component="subtitle1" variant="span"> */}
                  <p>{music.title}</p>
                  {/* </Typography> */}
                  <Typography variant="subtitle2" color="textSecondary">
                    <span style={{ color: '#8c8f8d' }}>{music.author}</span>
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton aria-label="previous">
                    {theme.direction === 'rtl' ? (
                      <SkipNextIcon />
                    ) : (
                      <SkipPreviousIcon />
                    )}
                  </IconButton>
                  <IconButton
                    aria-label="play/pause"
                    name={music.id}
                    data-url={music.musicFile}
                    onClick={handlePlayMusic}
                  >
                    <PlayArrowIcon className={classes.playIcon} />
                  </IconButton>
                  <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? (
                      <SkipPreviousIcon />
                    ) : (
                      <SkipNextIcon />
                    )}
                  </IconButton>
                </div>
              </div>

              <CardMedia
                className={classes.cover}
                image={music.album}
                title={music.title}
              />
            </Card>
          </CardWrapper>
        ))}
      </CardContainer>
    </div>
  );
};

export default MusicDetailPage;
