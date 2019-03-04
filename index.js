'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const API_VERSION = 1;

const port = process.env.PORT || 3000;

const app = express();

process.on('uncaughtException', (err) => {
  console.log('Top level error. you can not recover.', err);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('docs'));

app.use((req, res) => {
  res.status(404);
  res.json({message: 'Not Found'});
});

app.use((err, req, res, next) => {
  res.status(500);
  res.json({message: 'Server Error'});
});

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Server start. http://%s:%s', host, port);
});
