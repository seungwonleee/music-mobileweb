const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const musicRouter = require('./routes/music');

app.use(helmet());

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

const datas = [
  {
    musicId: 1,
    title: '음악1',
    artist: '아티스트1',
    image:
      'https://lh3.googleusercontent.com/-WKuLzpD_IAE/YQjwvmsymTI/AAAAAAAABNk/8m4mdHeZBFMBAXA6ywE5ZOpamh46IvwgQCLcBGAsYHQ/test.png',
    detail: {
      ablum: '앨범1',
      genre: '장르1',
      releaseDate: '출시일1',
      playTime: 10,
      author: '저자1',
      composor: '작곡가1',
    },
  },
  {
    musicId: 2,
    title: '음악2',
    artist: '아티스트2',
    image:
      'https://lh3.googleusercontent.com/-WKuLzpD_IAE/YQjwvmsymTI/AAAAAAAABNk/8m4mdHeZBFMBAXA6ywE5ZOpamh46IvwgQCLcBGAsYHQ/test.png',
    detail: {
      ablum: '앨범2',
      genre: '장르2',
      releaseDate: '출시일2',
      playTime: 20,
      author: '저자2',
      composor: '작곡가2',
    },
  },
  {
    musicId: 3,
    title: '음악3',
    artist: '아티스트3',
    image:
      'https://lh3.googleusercontent.com/-WKuLzpD_IAE/YQjwvmsymTI/AAAAAAAABNk/8m4mdHeZBFMBAXA6ywE5ZOpamh46IvwgQCLcBGAsYHQ/test.png',
    detail: {
      ablum: '앨범3',
      genre: '장르3',
      releaseDate: '출시일3',
      playTime: 30,
      author: '저자3',
      composor: '작곡가3',
    },
  },
  {
    musicId: 4,
    title: '음악4',
    artist: '아티스트4',
    image:
      'https://lh3.googleusercontent.com/-WKuLzpD_IAE/YQjwvmsymTI/AAAAAAAABNk/8m4mdHeZBFMBAXA6ywE5ZOpamh46IvwgQCLcBGAsYHQ/test.png',
    detail: {
      ablum: '앨범4',
      genre: '장르4',
      releaseDate: '출시일4',
      playTime: 40,
      author: '저자4',
      composor: '작곡가4',
    },
  },
];

// test router
app.get('/', (req, res) => {
  res.status(200).json({ musicList: datas });
});

app.use('/music', musicRouter);

const port = 3065;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
