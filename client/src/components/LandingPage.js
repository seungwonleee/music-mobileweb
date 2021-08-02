import React from 'react';
import faker from 'faker';

import GridCard from './GridCard';
import Grid from '@material-ui/core/Grid';

const datas = [
  {
    musicId: 1,
    title: faker.name.title(),
    artist: faker.name.firstName(),
    image: faker.image.imageUrl(),
    detail: {
      ablum: faker.commerce.productName(),
      genre: faker.music.genre(),
      releaseDate: faker.date.recent(),
      playTime: 10,
      author: faker.name.firstName(),
    },
  },
  {
    musicId: 2,
    title: faker.name.title(),
    artist: faker.name.firstName(),
    image: faker.image.imageUrl(),
    detail: {
      ablum: faker.commerce.productName(),
      genre: faker.music.genre(),
      releaseDate: faker.date.recent(),
      playTime: 10,
      author: faker.name.firstName(),
    },
  },
  {
    musicId: 3,
    title: faker.name.title(),
    artist: faker.name.firstName(),
    image: faker.image.imageUrl(),
    detail: {
      ablum: faker.commerce.productName(),
      genre: faker.music.genre(),
      releaseDate: faker.date.recent(),
      playTime: 10,
      author: faker.name.firstName(),
    },
  },
  {
    musicId: 4,
    title: faker.name.title(),
    artist: faker.name.firstName(),
    image: faker.image.imageUrl(),
    detail: {
      ablum: faker.commerce.productName(),
      genre: faker.music.genre(),
      releaseDate: faker.date.recent(),
      playTime: 10,
      author: faker.name.firstName(),
    },
  },
];

const LandingPage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        {datas &&
          datas.map((data, index) => <GridCard key={data.title} data={data} />)}
      </Grid>
    </div>
  );
};

export default LandingPage;
