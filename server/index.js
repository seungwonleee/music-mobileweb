const express = require('express');
const app = express();
const helmet = require('helmet');

const AWS = require('aws-sdk');
require('dotenv').config();

// secure middleware
app.use(helmet());

// AWS config
AWS.config.update({
  region: 'ap-northeast-2',
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY_ID,
});

// Create S3 service object
s3 = new AWS.S3();

// Create the parameters for calling listObjects
let bucketParams = {
  Bucket: 'music-mobileweb',
};

// Call S3 bucket list
s3.listObjects(bucketParams, async function (err, data) {
  if (err) {
    console.log('Error', err);
  } else {
    let s3MusicList = await data.Contents;

    let fileList = [];
    // getObject URL
    s3MusicList.forEach((data) => {
      let params = { Bucket: 'music-mobileweb', Key: data.Key };
      let url = s3.getSignedUrl('getObject', params);
      // console.log('The URL is', url);
      data.URL = url;
      // console.log('result ===> ', data);
      fileList.push(data);
    });
    console.log(fileList);
  }
});

// test router
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 3065;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
