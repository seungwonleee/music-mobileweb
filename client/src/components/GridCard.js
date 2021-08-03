import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import 'moment/locale/ko';
import { useDispatch } from 'react-redux';
import { PLAY_MUSIC } from '../reducers/music';

// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// styled-components
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-size: 16px;
  width: 30vw;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 0.8rem;
  width: 30vw;
`;

// Material UI CSS
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: '100%',
    margin: '6px',
    height: '100%',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const GridCard = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handlePlay = useCallback(() => {
    console.log('음악 재생');
    dispatch({
      type: PLAY_MUSIC,
      data: {
        musicId: data.id,
        playTime: 0,
        musicURL: data.musicFile,
      },
    });
  }, []);

  return (
    <Grid item xs={6} sm={6} md={4} lg={3} xl={2} className={classes.center}>
      <Card className={classes.root}>
        <CardMedia>
          <div style={{ position: 'relative' }}>
            {/* cover image */}
            <Link to={`/music/${data.id}`}>
              <Image src={data.album} />
            </Link>
            {/* play button */}
            <IconButton
              aria-label="play"
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                paddig: '1rem',
                color: '#FFFFFF',
              }}
              onClick={handlePlay}
            >
              <PlayCircleOutlineIcon />
            </IconButton>
          </div>
        </CardMedia>

        <CardContent
          style={{
            whiteSpace: 'nowrap',
            wordBreak: 'break-all',
            wordWrap: 'break-word',
            position: 'relative',
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="body2"
            color="textSecondary"
            component="div"
            style={{ overflow: 'hidden', paddingLeft: '0.5rem' }}
          >
            <Title>{data.title}</Title>

            <Text>{data.author}</Text>
            <Text>{moment(data.releaseDate).format('L').slice(0, -1)}</Text>
          </Typography>
          {/* view more */}
          <CardActions
            style={{
              padding: 0,
              position: 'absolute',
              top: 12,
              right: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton aria-label="more" style={{ padding: 0 }}>
              <MoreVertIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default GridCard;
