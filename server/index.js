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

// test router
app.get('/test', (req, res) => {
  res.status(200).json({ test: 'success' });
});

app.use('/music', musicRouter);

const port = 3065;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
