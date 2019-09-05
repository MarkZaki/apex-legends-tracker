const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/profile', require('./routes/profile'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
  });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `App is Running in ${process.env.NODE_ENV} mode, on port: ${PORT}`
  );
});
