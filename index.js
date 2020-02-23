const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const battle = require('./routes/battle');
const logger = require('./logger');
require('dotenv').config();

const app = express();
global.logger = logger;

// Set up mongodb connection
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

// register middlewares
app.use(
  cors({
    exposedHeaders: ['x-auth-header'],
  }),
);
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/', battle);

app.listen(process.env.PORT, () => logger.info(`Server: Battle API app listening on port ${process.env.PORT}!`));
