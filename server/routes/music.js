const express = require('express');
const router = express.Router();
const { Music } = require('../models');

const { uploadMusic } = require('../middlewares/upload');

router.get('/', async (req, res, next) => {
  try {
    const Musics = await Music.findAll({
      where: {},
      order: [
        ['createdAt', 'DESC'], //최신 게시글부터
      ],
    });
    res.status(200).json(Musics);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// 음악 업로드
router.post(
  '/upload',
  uploadMusic.fields([
    {
      name: 'album',
      maxCount: 1,
    },
    {
      name: 'musicFile',
      maxCount: 1,
    },
  ]),
  async (req, res, next) => {
    // console.log('body data ===>', req.body); body객체
    // console.log('save data ===>', req.files); s3파일

    const albumS3 = req.files.album[0].location;
    const musicFileS3 = req.files.musicFile[0].location;

    try {
      const existedMusic = await Music.findOne({
        where: {
          title: req.body.title,
          author: req.body.author,
          releaseDate: req.body.releaseDate,
        },
      });
      if (existedMusic) {
        return res.status(403).send('이미 업로드한 파일입니다.');
      }

      await Music.create({
        title: req.body.title,
        genre: req.body.genre,
        author: req.body.author,
        composor: req.body.composor,
        releaseDate: req.body.releaseDate,
        album: albumS3,
        musicFile: musicFileS3,
      });

      res.status(201).json({ uploadSuccess: true });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

module.exports = router;
